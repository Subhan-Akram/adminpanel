/* eslint-disable no-unused-vars */
import { ModelTableWrapper } from "./style";
import Table from "../../../../components/Table";
import columns from "./columns";
import { Box, Card } from "@mui/material";
import { useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
// import CreateModelDrawer from "../CreateModelDrawer/CreateModelDrawer";
import {
  ConfirmDynamicModal,
  OutlinedButton,
  PrimaryButton,
  SearchBar,
  SullyTypography,
} from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompany } from "../../services";
import { triggerAlert } from "../../../../slice/alertSlice";
import CreateCompanyModal from "../CreateCompanyModal";
import CompanyModal from "../CompanyModal";

export default function CompaniesTable() {
  const [open, setOpen] = useState(false);
  const [deletePopover, setDeletePopover] = useState({
    element: null,
    value: {},
  });
  const { companies, isLoading } = useSelector((state) => state.companies);
  console.log("companies", companies);
  const [company, setCompany] = useState({});
  const dispatch = useDispatch();
  const handleDelete = async () => {
    const { value } = deletePopover;
    const { payload } = await dispatch(
      deleteCompany({ dispatch, extId: value.extId })
    );
    if (payload) {
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Model Deleted Successfully",
          alertType: "success",
        })
      );
      setDeletePopover({ element: null, value: {} });
    }
  };
  const handleView = (row) => {
    setCompany(row);
    setOpen(true);
    console.log("view ticket ");
  };

  return (
    <>
      <ConfirmDynamicModal
        isConfirmModalOpen={deletePopover.element}
        handleSubmit={handleDelete}
        setIsConfirmModalOpen={setDeletePopover}
        title={`Delete - ${deletePopover?.value?.name || ""}`}
        description={
          <SullyTypography classNameProps="confirm_modal_text">
            Are you sure you want to delete{" "}
            <SullyTypography variant="span" classNameProps="model_name">
              {deletePopover?.value?.name || ""}
            </SullyTypography>{" "}
            from Models ?
          </SullyTypography>
        }
        isLoading={isLoading}
        confirmBtnText="Delete"
      />
      <CompanyModal
        type="view"
        company={company}
        open={open}
        setOpen={setOpen}
      />

      <ModelTableWrapper sx={{ height: 400, width: "100%" }}>
        <Box className="model_drawer_box">
          <SullyTypography
            sx={{ fontSize: "1.5rem" }}
            classNameProps={"medium_title"}
          >
            Companies List
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
              <CreateCompanyModal>
                <PrimaryButton>Create Company</PrimaryButton>
              </CreateCompanyModal>
              {/* <CreateModelDrawer /> */}
            </Box>
          </Box>
        </Box>
        <Card sx={{ padding: 0 }}>
          <Box className="card_header">
            <SullyTypography classNameProps={"modaltitle1"}>
              All Companies
            </SullyTypography>
            <SearchBar placeholder={"Search"} />
          </Box>
          <Table
            isLoading={isLoading}
            rows={companies}
            columns={columns({ handleView, setDeletePopover })}
          />
        </Card>
      </ModelTableWrapper>
    </>
  );
}
