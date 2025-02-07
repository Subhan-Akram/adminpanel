import { OrganziationTableWrapper } from "./style";
import { columns } from "features/organizations/constants";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import {
  Banner,
  ConfirmationModal,
  OutlinedButton,
  SullyTypography,
  Table,
  TableToolbar,
} from "components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrganization as deleteOrganizationAction,
  getOrganizations,
} from "../../services";
import JoinCompanies from "../JoinCompanies";
import OrganizationEdit from "../OrganizationEdit";
import OrganizationCreate from "../OrganizationCreate";
import { getCompanies } from "features/companies";
import { setSelectedOrganization } from "features/organizations/slice";

export default function OrganziationTable() {
  const { companies, selectedOrganization: organization } = useSelector(
    (state) => state.organizations,
  );
  const [edit, setEdit] = useState(false);
  const [joinCompaniesModal, setJoinCompaniesModal] = useState(false);
  const [isDeleteOrganization, setIsDeleteOrganization] = useState(false);
  const { name, extId } = organization;
  const { organizations, isLoading, crudLoading } = useSelector(
    (state) => state.organizations,
  );

  const dispatch = useDispatch();
  const Toolbar = () => (
    <TableToolbar
      placeholder={"Search Organizations"}
      title=" All Organizations"
    />
  );

  const handleDelete = () => {
    dispatch(deleteOrganizationAction({ dispatch, extId }))
      .unwrap()
      .then(() => {
        setIsDeleteOrganization(false);
      });
  };

  const onDropDownChange = (row, type) => {
    dispatch(setSelectedOrganization(row));
    if (type === "edit") return setEdit({ isEdit: true, organization: row });
    if (type === "joinCompanies") return setJoinCompaniesModal(true);
    if (type === "delete") return setIsDeleteOrganization(true);
  };

  useEffect(() => {
    dispatch(getOrganizations({ dispatch }));
  }, [dispatch]);

  useEffect(() => {
    if (!companies.length) {
      dispatch(getCompanies({ dispatch }));
    }
  }, [companies.length, dispatch]);

  return (
    <>
      <ConfirmationModal
        isConfirmModalOpen={isDeleteOrganization}
        handleSubmit={handleDelete}
        setIsConfirmModalOpen={setIsDeleteOrganization}
        title={`Delete - ${name || ""}`}
        description={
          <SullyTypography classNameProps="confirm_modal_text">
            Are you sure you want to delete{" "}
            <SullyTypography variant="span" classNameProps="model_name">
              {name || ""}
            </SullyTypography>{" "}
            from system ?
          </SullyTypography>
        }
        isLoading={crudLoading}
        confirmBtnText="Delete"
      />
      <OrganizationEdit
        organization={organization}
        edit={edit}
        setEdit={setEdit}
      />
      {joinCompaniesModal && (
        <JoinCompanies
          row={organization}
          open={joinCompaniesModal}
          setOpen={setJoinCompaniesModal}
        />
      )}

      <OrganziationTableWrapper>
        <Banner text={"Organizations"}>
          <Box className="btn_group">
            <OutlinedButton startIcon={<FileDownloadOutlinedIcon />}>
              Export CSV
            </OutlinedButton>
            <OrganizationCreate />
          </Box>
        </Banner>
        <Table
          isLoading={isLoading}
          rows={organizations}
          CustomToolbar={Toolbar}
          columns={columns({
            onDropDownChange,
          })}
        />
      </OrganziationTableWrapper>
    </>
  );
}
