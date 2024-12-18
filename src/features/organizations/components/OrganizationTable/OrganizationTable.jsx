/* eslint-disable no-unused-vars */
import { ModelTableWrapper } from "./style";
import Table from "../../../../components/Table";
import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
import columns from "./columns";
import { Box, Card } from "@mui/material";
import { useEffect, useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
// import CreateModelDrawer from "../CreateModelDrawer/CreateModelDrawer";
import {
  ConfirmDynamicModal,
  OutlinedButton,
  PrimaryButton,
  SullyTypography,
} from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrganization, getOrganizations } from "../../services";
import { triggerAlert } from "../../../../slice/alertSlice";

import JoinCompaniesModal from "../JoinCompaniesModal";
import { BannerWrapper } from "globalStyles/BannerWrapper";
import OrganizationModal from "../organizationModal";
import CreateOrganizationModal from "../CreateOrganizationModal/CreateOrganizationModal";

export default function OrganziationTable() {
  const [open, setOpen] = useState(false);
  const [organizationModal, setOrganizationModal] = useState(false);
  const [deletePopover, setDeletePopover] = useState({
    isConfirmModalOpen: false,
    value: {},
  });
  const { organizations, isLoading } = useSelector(
    (state) => state.organizations
  );
  const [organization, setOrganization] = useState({});
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
        All Organization
      </SullyTypography>
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: "10px" }}>
        <GridToolbarQuickFilter placeholder="Search Organizations" />
      </Box>
    </GridToolbarContainer>
  );

  const handleDelete = async () => {
    const { value } = deletePopover;
    const { payload } = await dispatch(
      deleteOrganization({ dispatch, extId: value.extId })
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
    setOrganization(row);
    setOpen(true);
  };
  const handleOrgnization = (row) => {
    setOrganization(row);
    setOrganizationModal(true);
  };
  useEffect(() => {
    dispatch(getOrganizations({ dispatch }));
  }, []);
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
            from system ?
          </SullyTypography>
        }
        isLoading={isLoading}
        confirmBtnText="Delete"
      />
      <OrganizationModal
        organization={organization}
        open={open}
        setOpen={setOpen}
      />
      {organizationModal && (
        <JoinCompaniesModal
          row={organization}
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
            Organization List
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
              <CreateOrganizationModal>
                <PrimaryButton>Create Organization</PrimaryButton>
              </CreateOrganizationModal>
              {/* <CreateModelDrawer /> */}
            </Box>
          </Box>
        </BannerWrapper>
        <Table
          isLoading={isLoading}
          rows={organizations}
          CustomToolbar={CustomToolbar}
          columns={columns({
            handleView,
            setDeletePopover,
            handleOrgnization,
          })}
        />
      </ModelTableWrapper>
    </>
  );
}
