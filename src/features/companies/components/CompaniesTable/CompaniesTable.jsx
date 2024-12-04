/* eslint-disable no-unused-vars */
import { ModelTableWrapper } from "./style";
import Table from "../../../../components/Table";
import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
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
import JoinOrganizationModal from "../JoinOrganizationModal";
import { BannerWrapper } from "globalStyles/BannerWrapper";

export default function CompaniesTable() {
  const [open, setOpen] = useState(false);
  const [organizationModal, setOrganizationModal] = useState(false);
  const [deletePopover, setDeletePopover] = useState({
    element: null,
    value: {},
  });
  const { companies, isLoading } = useSelector((state) => state.companies);
  console.log("companies", companies);
  const [company, setCompany] = useState({});
  const dispatch = useDispatch();
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
        All Companies
      </SullyTypography>
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: "10px" }}>
        {/* <GridToolbarExport /> */}
        <GridToolbarQuickFilter placeholder="Search Companies" />
      </Box>
    </GridToolbarContainer>
  );

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
  const handleOrgnization = (row) => {
    setCompany(row);
    setOrganizationModal(true);
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
      <CompanyModal company={company} open={open} setOpen={setOpen} />
      {organizationModal && (
        <JoinOrganizationModal
          row={company}
          open={organizationModal}
          setOpen={setOrganizationModal}
        />
      )}

      <ModelTableWrapper sx={{ height: 400, width: "100%" }}>
        <BannerWrapper>
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
        </BannerWrapper>
        <Card sx={{ padding: 0 }}>
          <Table
            isLoading={isLoading}
            rows={companies}
            CustomToolbar={CustomToolbar}
            columns={columns({
              handleView,
              setDeletePopover,
              handleOrgnization,
            })}
          />
        </Card>
      </ModelTableWrapper>
    </>
  );
}
