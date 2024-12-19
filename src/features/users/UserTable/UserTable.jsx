import { ModelTableWrapper } from "./style";
import Table from "components/Table";
import columns from "./columns";
import { Box, Card } from "@mui/material";
import { useRef, useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import {
  ConfirmDynamicModal,
  OutlinedButton,
  SearchBar,
  SullyTypography,
} from "components";
import { useDispatch, useSelector } from "react-redux";
import { deleteModel } from "../../models/services";
import { triggerAlert } from "slice/alertSlice";
import { Modal, PrimaryButton } from "../../../components";
import getUserByEmail from "../services/getUserByEmail";
import { getUsers } from "../services";
import { BannerWrapper } from "../../../styles";
import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
import UserForm from "../components/UserForm/UserForm";

export default function UsersTable() {
  const { users, isLoading } = useSelector((state) => state.users);
  const formRef = useRef(null);

  const initialValues = {
    name: "John Doe",
    fullName: "Johnathan Doe",
    email: "johndoe@example.com",
    roles: ["admin", "user"],
    status: "active", // active or inactive
  };
  const userInitialValues = {
    name: "",
    fullName: "",
    email: "",
    roles: [],
    status: "false", // active or inactive
  };

  const [open, setOpen] = useState(false);
  const [createUserModal, setCreateUserModal] = useState(false);
  const [deletePopover, setDeletePopover] = useState({
    isConfirmModalOpen: null,
    model: "",
  });
  const { model, isConfirmModalOpen } = deletePopover;

  const CustomToolbar = () => (
    <GridToolbarContainer
      sx={{
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
      }}
    >
      <SullyTypography classNameProps={"modaltitle1"}>
        All Users
      </SullyTypography>
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: "10px" }}>
        <GridToolbarQuickFilter placeholder="Search Users" />
      </Box>
    </GridToolbarContainer>
  );
  const dispatch = useDispatch();
  const handleDelete = async () => {
    const { model } = deletePopover;
    const { payload } = await dispatch(deleteModel({ extId: model.extId }));
    if (payload) {
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Model Deleted Successfully",
          alertType: "success",
        })
      );
      setDeletePopover({ isConfirmModalOpen: false, extId: "" });
    }
  };
  const handleView = (row) => {
    setOpen(true);
  };
  const handleSearch = async (value) => {
    if (value) return dispatch(getUserByEmail({ email: value, dispatch }));
    dispatch(getUsers({ dispatch }));
  };

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <>
      <ConfirmDynamicModal
        isConfirmModalOpen={isConfirmModalOpen}
        handleSubmit={handleDelete}
        setIsConfirmModalOpen={setDeletePopover}
        title={`Delete - ${model?.fullName || model?.username}`}
        description={
          <SullyTypography classNameProps="confirm_modal_text">
            Are you sure you want to delete{" "}
            <SullyTypography variant="span" classNameProps="model_name">
              {model?.fullName || model?.username}
            </SullyTypography>{" "}
            from Company ?
          </SullyTypography>
        }
        isLoading={isLoading}
        confirmBtnText="Delete"
      />
      <Modal
        formRef={formRef}
        title="Edit User"
        isEdit={true}
        setOpen={setOpen}
        open={open}
      >
        <UserForm
          setOpen={setOpen}
          formRef={formRef}
          initialValues={initialValues}
          handleSubmit={handleSubmit}
        />
      </Modal>
      <Modal
        formRef={formRef}
        title="Create User"
        isEdit={false}
        setOpen={setCreateUserModal}
        open={createUserModal}
      >
        <UserForm
          setOpen={setOpen}
          formRef={formRef}
          initialValues={userInitialValues}
          handleSubmit={handleSubmit}
        />
      </Modal>

      <ModelTableWrapper sx={{ height: 400, width: "100%" }}>
        <BannerWrapper>
          <SullyTypography
            sx={{ fontSize: "1.5rem" }}
            classNameProps={"medium_title"}
          >
            Company Users
          </SullyTypography>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "12px",
                // width: "200px",
              }}
            >
              <OutlinedButton startIcon={<FileDownloadOutlinedIcon />}>
                Export CSV
              </OutlinedButton>
              <PrimaryButton
                onClick={() => {
                  setCreateUserModal(true);
                }}
              >
                Create User
              </PrimaryButton>
              {/* <CreateModelDrawer /> */}
            </Box>
          </Box>
        </BannerWrapper>
        {/* <Box className="card_header">
            <SullyTypography classNameProps={"modaltitle1"}>
              All Users
            </SullyTypography>
            <SearchBar
              placeholder="Search By Email"
              handleAction={handleSearch}
            />
          </Box> */}
        <Table
          CustomToolbar={CustomToolbar}
          showTableSearch={true}
          isLoading={isLoading}
          rows={users}
          columns={columns({ handleView, setDeletePopover })}
        />
      </ModelTableWrapper>
    </>
  );
}
