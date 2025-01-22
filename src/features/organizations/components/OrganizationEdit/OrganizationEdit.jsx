import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateOrganization } from "../../services";
import OrganizationForm from "../OrganizationForm";
import { Drawer } from "components";

const OrganizationEdit = ({ edit, setEdit, organization }) => {
  const formRef = useRef(null);
  const { crudLoading } = useSelector((state) => state.organizations);
  const dispatch = useDispatch();

  const handleSubmit = (val) => {
    dispatch(updateOrganization({ dispatch, payload: val }))
      .unwrap()
      .then(() => {
        setEdit(false);
      });
  };
  return (
    <Drawer
      formRef={formRef}
      title="Edit Organiztion"
      setOpen={setEdit}
      open={edit}
      isLoading={crudLoading}
    >
      <OrganizationForm
        formRef={formRef}
        initialValues={organization}
        handleSubmit={handleSubmit}
        isEdit={true}
      />
    </Drawer>
  );
};

OrganizationEdit.propTypes = {
  edit: PropTypes.bool,
  setEdit: PropTypes.func,
};

export default OrganizationEdit;
