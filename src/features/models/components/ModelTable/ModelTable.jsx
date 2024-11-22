import { ModelTableWrapper } from "./style";
import Table from "../../../../components/Table";
import columns from "./columns";
import ModelDrawer from "../ModelDrawer/ModelDrawer";
import { Box, Card } from "@mui/material";
import { useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CreateModelDrawer from "../CreateModelDrawer/CreateModelDrawer";
import {
  ConfirmDynamicModal,
  OutlinedButton,
  SearchBar,
  SullyTypography,
} from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { deleteModel } from "../../services";
import { triggerAlert } from "../../../../slice/alertSlice";

export default function ModelTable() {
  const [open, setOpen] = useState(false);
  const [deletePopover, setDeletePopover] = useState({
    element: null,
    model: "",
  });
  const { models, isLoading } = useSelector((state) => state.models);
  const [model, setModel] = useState({
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
    setModel(row);
    setOpen(true);
    console.log("view ticket ");
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
      {/* <ConfirmPopover
        text={`Are you sure you want to delete ${deletePopover?.model?.name} model ?`}
        handleAction={handleDelete}
        setPopover={setDeletePopover}
        popover={deletePopover}
      /> */}
      <ModelDrawer
        setModel={setModel}
        open={open}
        setOpen={setOpen}
        model={model}
      />
      <ModelTableWrapper sx={{ height: 400, width: "100%" }}>
        <Box className="model_drawer_box">
          <SullyTypography
            sx={{ fontSize: "1.5rem" }}
            classNameProps={"medium_title"}
          >
            LLM Models
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
              <CreateModelDrawer />
            </Box>
          </Box>
        </Box>
        <Card sx={{ padding: 0 }}>
          <Box className="card_header">
            <SullyTypography classNameProps={"modaltitle1"}>
              All Models
            </SullyTypography>
            <SearchBar />
          </Box>
          <Table
            isLoading={isLoading}
            rows={models}
            columns={columns({ handleView, setDeletePopover })}
          />
        </Card>
      </ModelTableWrapper>
    </>
  );
}
