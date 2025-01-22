import React, { useRef } from "react";
import PropTypes from "prop-types";
import CompanyForm from "../CompanyForm";
import { Drawer } from "components";
import { useDispatch, useSelector } from "react-redux";
import { updateCompany } from "../../services";

const CompanyEdit = ({ edit, setEdit, company }) => {
  const formRef = useRef(null);
  const { crudLoading } = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  const handleSubmit = (val) => {
    dispatch(updateCompany({ dispatch, payload: val }))
      .unwrap()
      .then(() => {
        setEdit(false);
      });
  };
  if (!edit) return <></>;
  return (
    <Drawer
      formRef={formRef}
      title="Edit Company"
      setOpen={setEdit}
      open={edit}
      isLoading={crudLoading}
    >
      <CompanyForm
        isEdit={true}
        formRef={formRef}
        initialValues={company}
        handleSubmit={handleSubmit}
      />
    </Drawer>
  );
};

CompanyEdit.propTypes = {
  setEdit: PropTypes.func,
  edit: PropTypes.bool,
};

export default CompanyEdit;
