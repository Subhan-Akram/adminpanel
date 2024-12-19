import { ModelTableWrapper } from "./style";
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
  Table,
  TableToolbar,
} from "components";

import { useDispatch, useSelector } from "react-redux";
import { deleteModel as deleteModelAction, getAllModels } from "../../services";
import { triggerAlert } from "slice/alertSlice";

const ModelTable = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("view");
  const [model, setModel] = useState({});
  const [deleteModel, setDeleteModel] = useState({
    confirmModalContent: {},
    isConfirmModalOpen: false,
  });

  const dispatch = useDispatch();
  const { models, crudLoading, isLoading } = useSelector(
    (state) => state.models
  );

  const { isConfirmModalOpen, confirmModalContent: { name, extId } = {} } =
    deleteModel;

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
              Export CSV
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
};

export default ModelTable;
