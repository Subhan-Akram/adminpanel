import { ModelTableWrapper } from "./style";
import Table from "../../../../components/Table";
import columns from "./useColumns";
import ModelDrawer from "../ModelDrawer/ModelDrawer";
import { Box } from "@mui/material";
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
import { deleteModel as deleteModelAction, getAllModels } from "../../services";
import { triggerAlert } from "../../../../slice/alertSlice";
import TableToolbar from "../../../../components/TableToolbar";

export default function ModelTable() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("view");
  const [deleteModel, setDeleteModel] = useState({
    confirmModalContent: {},
    isConfirmModalOpen: false,
  });
  const { isConfirmModalOpen, confirmModalContent: { name, extId } = {} } =
    deleteModel;
  const { models, crudLoading, isLoading } = useSelector(
    (state) => state.models
  );
  const [model, setModel] = useState({});
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const { payload } = await dispatch(deleteModelAction({ extId }));
    if (payload) {
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Model Deleted Successfully",
          alertType: "success",
        })
      );
      setDeleteModel({ isDeleteModalOpen: false, confirmModalContent: {} });
    }
  };
  const handleDrawer = ({ row, type }) => {
    setType(type);
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
        isConfirmModalOpen={isConfirmModalOpen}
        handleSubmit={handleDelete}
        setIsConfirmModalOpen={setDeleteModel}
        title={`Delete - ${name || ""}`}
        description={
          <SullyTypography classNameProps="confirm_modal_text">
            Are you sure you want to delete{" "}
            <SullyTypography variant="span" classNameProps="model_name">
              {name || ""}
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
          columns={columns({ handleDrawer, setDeleteModel })}
        />
      </ModelTableWrapper>
    </>
  );
}
