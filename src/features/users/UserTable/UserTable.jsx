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

  const [open, setOpen] = useState(false);
  const [deletePopover, setDeletePopover] = useState({
    element: null,
    model: "",
  });
  const { model, element } = deletePopover;
  console.log("users", deletePopover);

  const [user, setUser] = useState({
    model: "ns",
    description: "s",
    rating: 2,
    modelCard: "23",
  });
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
      setDeletePopover({ element: null, extId: "" });
    }
  };
  const handleView = (row) => {
    console.log("row", row);
    setUser(row);
    setOpen(true);
    console.log("view ticket ");
  };
  const handleSearch = async (value) => {
    console.log("val", value);
    if (value) return dispatch(getUserByEmail({ email: value, dispatch }));
    dispatch(getUsers({ dispatch }));
  };

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  const handleSubmitForm = () => {
    if (formRef.current) {
      formRef.current.submitForm(); // Calls the submit function from formik
    }
  };
  return (
    <>
      <ConfirmDynamicModal
        isConfirmModalOpen={element}
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
      <Modal title="Edit User" isEdit={true} setOpen={setOpen} open={open}>
        <UserForm
          ref={formRef}
          initialValues={initialValues}
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
                Export Csv
              </OutlinedButton>
              <PrimaryButton>Create User</PrimaryButton>
              {/* <CreateModelDrawer /> */}
            </Box>
          </Box>
        </BannerWrapper>
        <Card sx={{ padding: 0 }}>
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
        </Card>
      </ModelTableWrapper>
    </>
  );
}
