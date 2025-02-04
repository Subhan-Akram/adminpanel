import { ModelTableWrapper } from "./style";
import { columns } from "features/models/constants";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ModelCreate from "../ModelCreate";
import {
  ConfirmationModal,
  Banner,
  OutlinedButton,
  SullyTypography,
  Table,
  TableToolbar,
} from "components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteModel as deleteModelAction,
  getAllModels,
  getAllModelTags,
} from "../../services";
import ModelDetails from "../ModelDetails";

const ModelTable = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("view");
  const [model, setModel] = useState({});
  const [isDeleteModel, setIsDeleteModel] = useState(false);
  const dispatch = useDispatch();
  const { models, crudLoading, isLoading, tags } = useSelector(
    (state) => state.models,
  );
  const { name, extId } = model;

  const handleDelete = () => {
    dispatch(deleteModelAction({ extId }))
      .unwrap()
      .then(() => {
        setIsDeleteModel(false);
      });
  };
  const onDropDownChange = ({ row, type }) => {
    setType(type);
    setModel(row);
    if (type === "delete") return setIsDeleteModel(true);
    setOpen(true);
  };

  const Toolbar = () => (
    <TableToolbar placeholder={"Search LLM Models"} title="All Models" />
  );

  useEffect(() => {
    if (!models.length) {
      dispatch(getAllModels({ dispatch }));
    }
  }, [dispatch, models.length]);
  useEffect(() => {
    if (!tags.length) dispatch(getAllModelTags());
  }, [dispatch, tags.length]);
  return (
    <>
      <ConfirmationModal
        isConfirmModalOpen={isDeleteModel}
        handleSubmit={handleDelete}
        setIsConfirmModalOpen={setIsDeleteModel}
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

      <ModelDetails
        setModel={setModel}
        open={open}
        type={type}
        setType={setType}
        setOpen={setOpen}
        model={model}
      />
      <ModelTableWrapper>
        <Banner text={"LLM Models"}>
          <Box className="btn_group">
            <OutlinedButton startIcon={<FileDownloadOutlinedIcon />}>
              Export CSV
            </OutlinedButton>
            <ModelCreate />
          </Box>
        </Banner>
        <Table
          isLoading={isLoading}
          showTableSearch={true}
          rows={models}
          CustomToolbar={Toolbar}
          columns={columns({ onDropDownChange })}
        />
      </ModelTableWrapper>
    </>
  );
};

export default ModelTable;
