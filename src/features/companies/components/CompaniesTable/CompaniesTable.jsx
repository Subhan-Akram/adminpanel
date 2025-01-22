import { CompaniesTableWrapper } from "./style";
import { columns } from "features/companies/constants";
import { Box } from "@mui/material";
import { useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import {
  Table,
  Banner,
  ConfirmationModal,
  OutlinedButton,
  PrimaryButton,
  SullyTypography,
  TableToolbar,
} from "components";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompany as deleteCompanyAction } from "../../services";
import CompanyCreate from "../CompanyCreate";
import CompanyEdit from "../CompanyEdit";
import CompanyJoinOrganization from "../CompanyJoinOrganization";

export default function CompaniesTable() {
  const [edit, setEdit] = useState(false);
  const [company, setCompany] = useState({});
  const [joinOrganizationModal, setJoinOrganizationModal] = useState(false);
  const [isDeleteCompany, setIsDeleteCompany] = useState(false);
  const { name, extId } = company;
  const { companies, isLoading, crudLoading } = useSelector(
    (state) => state.companies,
  );

  const dispatch = useDispatch();
  const Toolbar = () => (
    <TableToolbar placeholder={"Search Companies"} title="All Companies" />
  );

  const handleDelete = async () => {
    dispatch(deleteCompanyAction({ dispatch, extId }))
      .unwrap()
      .then(() => {
        setIsDeleteCompany(false);
      });
  };
  const handleChange = (row, type) => {
    setCompany(row);
    if (type === "edit") setEdit(true);
    if (type === "joinOrganization") setJoinOrganizationModal(true);
    if (type === "deleteCompany") setIsDeleteCompany(true);
  };

  return (
    <>
      <ConfirmationModal
        isConfirmModalOpen={isDeleteCompany}
        handleSubmit={handleDelete}
        setIsConfirmModalOpen={setIsDeleteCompany}
        title={`Delete - ${name || ""}`}
        description={
          <SullyTypography classNameProps="confirm_modal_text">
            Are you sure you want to delete{" "}
            <SullyTypography variant="span" classNameProps="model_name">
              {name || ""}
            </SullyTypography>{" "}
            from Organiztions ?
          </SullyTypography>
        }
        isLoading={crudLoading}
        confirmBtnText="Delete"
      />
      <CompanyEdit company={company} edit={edit} setEdit={setEdit} />
      {joinOrganizationModal && (
        <CompanyJoinOrganization
          company={company}
          open={joinOrganizationModal}
          setOpen={setJoinOrganizationModal}
        />
      )}

      <CompaniesTableWrapper>
        <Banner text={"Companies"}>
          <Box className="btn_group">
            <OutlinedButton startIcon={<FileDownloadOutlinedIcon />}>
              Export CSV
            </OutlinedButton>
            <CompanyCreate>
              <PrimaryButton>Create Company</PrimaryButton>
            </CompanyCreate>
          </Box>
        </Banner>

        <Table
          isLoading={isLoading}
          rows={companies}
          CustomToolbar={Toolbar}
          columns={columns({
            handleChange,
          })}
        />
      </CompaniesTableWrapper>
    </>
  );
}
