import { ModelTableWrapper } from "./style";
import Table from "../../../../components/Table";
import columns from "./columns";
import ModelDrawer from "../ModelDrawer/ModelDrawer";
import { Box, Card } from "@mui/material";
import { useEffect, useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CreateModelDrawer from "../CreateModelDrawer/CreateModelDrawer";
import {
  ConfirmDynamicModal,
  OutlinedButton,
  SearchBar,
  SullyTypography,
} from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { deleteModel, getAllModels } from "../../services";
import { triggerAlert } from "../../../../slice/alertSlice";
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";

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
  const CustomToolbar = () => (
    <GridToolbarContainer
      sx={{
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
      }}
    >
      <SullyTypography
        sx={{ color: "var(--brand-button-text-icon)", fontWeight: "500" }}
        classNameProps={"modaltitle1"}
      >
        All Models
      </SullyTypography>
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: "10px" }}>
        {/* <GridToolbarExport /> */}
        <GridToolbarQuickFilter placeholder="Search LLM Models" />
      </Box>
    </GridToolbarContainer>
  );

  useEffect(() => {
    console.log("running==");
    if (!models.length) {
      dispatch(getAllModels({ dispatch }));
    }
  }, []);
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

      <ModelDrawer
        setModel={setModel}
        open={open}
        setOpen={setOpen}
        model={model}
      />
      <ModelTableWrapper sx={{ height: 400, width: "100%" }}>
        <Box className="model_drawer_box">
          <SullyTypography
            // sx={{ fontSize: "1" }}
            classNameProps={"card_title_1"}
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
          <Table
            isLoading={isLoading}
            showTableSearch={true}
            rows={models}
            CustomToolbar={CustomToolbar}
            columns={columns({ handleView, setDeletePopover })}
          />
        </Card>
      </ModelTableWrapper>
    </>
  );
}
