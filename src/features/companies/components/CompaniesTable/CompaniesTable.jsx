import { CompaniesTableWrapper } from "./style";
import Table from "../../../../components/Table";
import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
import columns from "./columns";
import { Box } from "@mui/material";
import { useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import {
  ConfirmDynamicModal,
  OutlinedButton,
  PrimaryButton,
  SullyTypography,
} from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompany } from "../../services";
import { triggerAlert } from "../../../../slice/alertSlice";
import CompanyCreate from "../CompanyCreate";
import CompanyModal from "../CompanyEdit";
import JoinOrganization from "../JoinOrganization";
import { BannerWrapper } from "globalStyles/BannerWrapper";

export default function CompaniesTable() {
  const [open, setOpen] = useState(false);
  const [organizationModal, setOrganizationModal] = useState(false);
  const [deletePopover, setDeletePopover] = useState({
    isConfirmModalOpen: false,
    value: {},
  });
  const { companies, isLoading } = useSelector((state) => state.companies);
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
      setDeletePopover({ isConfirmModalOpen: false, value: {} });
    }
  };
  const handleView = (row) => {
    setCompany(row);
    setOpen(true);
  };
  const handleOrgnization = (row) => {
    setCompany(row);
    setOrganizationModal(true);
  };

  return (
    <>
      <ConfirmDynamicModal
        isConfirmModalOpen={deletePopover.isConfirmModalOpen}
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
        <JoinOrganization
          row={company}
          open={organizationModal}
          setOpen={setOrganizationModal}
        />
      )}

      <CompaniesTableWrapper sx={{ height: 400, width: "100%" }}>
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
              }}
            >
              <OutlinedButton startIcon={<FileDownloadOutlinedIcon />}>
                Export CSV
              </OutlinedButton>
              <CompanyCreate>
                <PrimaryButton>Create Company</PrimaryButton>
              </CompanyCreate>
            </Box>
          </Box>
        </BannerWrapper>
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
      </CompaniesTableWrapper>
    </>
  );
}
