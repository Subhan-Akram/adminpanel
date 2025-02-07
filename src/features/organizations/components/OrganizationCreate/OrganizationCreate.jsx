import React, { useRef } from "react";
import PropTypes from "prop-types";
import OrganizationForm from "../OrganizationForm/OrganizationForm";
import { Drawer, PrimaryButton } from "components";
import { createOrganization } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { organizationInitialValues } from "../../constants";
import { setSelectedOrganization } from "features/organizations/slice";

const OrganizationCreate = () => {
  const [open, setOpen] = React.useState(false);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { crudLoading } = useSelector((state) => state.organizations);

  const handleSubmit = (val) => {
    dispatch(createOrganization({ dispatch, payload: val }))
      .unwrap()
      .then(() => {
        setOpen(false);
      });
  };

  return (
    <>
      <PrimaryButton
        onClick={() => {
          setOpen(true);
          dispatch(setSelectedOrganization({}));
        }}
      >
        Create Organization
      </PrimaryButton>
      <Drawer
        formRef={formRef}
        title="Create Organizaion"
        setOpen={setOpen}
        open={open}
        isLoading={crudLoading}
      >
        <OrganizationForm
          isEdit={false}
          formRef={formRef}
          initialValues={organizationInitialValues}
          handleSubmit={handleSubmit}
        />
      </Drawer>
    </>
  );
};

OrganizationCreate.propTypes = {
  children: PropTypes.node,
};

export default OrganizationCreate;
