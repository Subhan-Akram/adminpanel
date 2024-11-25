/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { ModelTableWrapper } from "./style";
import Table from "components/Table";
import columns from "./columns";
// import ModelDrawer from "../ModelDrawer/ModelDrawer";
import { Box, Button, Card } from "@mui/material";
import { useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
// import CreateModelDrawer from "../CreateModelDrawer/CreateModelDrawer";
import {
  ConfirmDynamicModal,
  OutlinedButton,
  SearchBar,
  SullyTypography,
} from "components";
import { useDispatch, useSelector } from "react-redux";
import { deleteModel } from "../../models/services";
import { triggerAlert } from "slice/alertSlice";
import { PrimaryButton } from "../../../components";
import getUserByEmail from "../services/getUserByEmail";
import { getUsers } from "../services";

export default function UsersTable() {
  const { users, isLoading } = useSelector((state) => state.users);
  console.log("users", users);
  const [open, setOpen] = useState(false);
  const [deletePopover, setDeletePopover] = useState({
    element: null,
    model: "",
  });
  const [user, setUser] = useState({
    model: "ns",
    description: "s",
    rating: 2,
    modelCard: "23",
  });
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
  return (
    <>
      <ConfirmDynamicModal
        isConfirmModalOpen={deletePopover.element}
        handleSubmit={handleDelete}
        setIsConfirmModalOpen={setDeletePopover}
        title={`Delete - ${deletePopover?.model?.name || ""}`}
        description={
          <SullyTypography classNameProps="confirm_modal_text">
            Are you sure you want to delete{" "}
            <SullyTypography variant="span" classNameProps="model_name">
              {deletePopover?.model?.name || ""}
            </SullyTypography>{" "}
            from Models ?
          </SullyTypography>
        }
        isLoading={isLoading}
        confirmBtnText="Delete"
      />

      <ModelTableWrapper sx={{ height: 400, width: "100%" }}>
        <Box className="model_drawer_box">
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
        </Box>
        <Card sx={{ padding: 0 }}>
          <Box className="card_header">
            <SullyTypography classNameProps={"modaltitle1"}>
              All Users
            </SullyTypography>
            <SearchBar
              placeholder="Search By Email"
              handleAction={handleSearch}
            />
          </Box>
          <Table
            isLoading={isLoading}
            rows={users}
            columns={columns({ handleView, setDeletePopover })}
          />
        </Card>
      </ModelTableWrapper>
    </>
  );
}
