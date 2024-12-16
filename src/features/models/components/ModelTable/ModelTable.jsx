import { ModelTableWrapper } from "./style";
import Table from "../../../../components/Table";
import columns from "./useColumns";
import ModelDrawer, { initialModel } from "../ModelDrawer/ModelDrawer";
import { Box, Card } from "@mui/material";
import { useEffect, useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CreateModelDrawer from "../CreateModelDrawer/CreateModelDrawer";
import {
  ConfirmDynamicModal,
  ModelBanner,
  OutlinedButton,
  SullyTypography,
} from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { deleteModel, getAllModels } from "../../services";
import { triggerAlert } from "../../../../slice/alertSlice";
import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { BannerWrapper } from "../../../../styles/BannerWrapper";
import TableToolbar from "../../../../components/TableToolbar";

export default function ModelTable() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("view");
  const [deletePopover, setDeletePopover] = useState({
    element: null,
    model: "",
  });
  const { element, model: selectedModel } = deletePopover;
  const { models, crudLoading, isLoading } = useSelector(
    (state) => state.models
  );
  const [model, setModel] = useState({});
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
    setModel(row);
    setOpen(true);
  };
  const handleEdit = (row) => {
    setType("edit");
    setModel(row);
    setOpen(true);
  };
  const Toolbar = () => (
    <TableToolbar placeholder={"Search LLM Models"} title="All Models" />
  );
  useEffect(() => {
    if (!models.length) {
      dispatch(getAllModels({ dispatch }));
    }
  }, []);
  return (
    <>
      <ConfirmDynamicModal
        isConfirmModalOpen={element}
        handleSubmit={handleDelete}
        setIsConfirmModalOpen={setDeletePopover}
        title={`Delete - ${selectedModel?.name || ""}`}
        description={
          <SullyTypography classNameProps="confirm_modal_text">
            Are you sure you want to delete{" "}
            <SullyTypography variant="span" classNameProps="model_name">
              {selectedModel?.name || ""}
            </SullyTypography>{" "}
            from Models ?
          </SullyTypography>
        }
        isLoading={crudLoading}
        confirmBtnText="Delete"
      />

      <ModelDrawer
        setModel={setModel}
        open={open}
        type={type}
        setType={setType}
        setOpen={setOpen}
        model={model}
      />
      <ModelTableWrapper>
        <ModelBanner text={"LLM Models"}>
          <Box className="btn_group">
            <OutlinedButton startIcon={<FileDownloadOutlinedIcon />}>
              Export Csv
            </OutlinedButton>
            <CreateModelDrawer />
          </Box>
        </ModelBanner>
        <Table
          isLoading={isLoading}
          showTableSearch={true}
          rows={models}
          CustomToolbar={Toolbar}
          columns={columns({ handleView, setDeletePopover, handleEdit })}
        />
      </ModelTableWrapper>
    </>
  );
}
