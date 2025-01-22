import React, { useRef } from "react";
import CompanyForm from "../CompanyForm";
import { companyInitialValues } from "../../constants";
import { createCompany } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { Drawer, PrimaryButton } from "components";

const CompanyCreate = () => {
  const [open, setOpen] = React.useState(false);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { crudLoading } = useSelector((state) => state.companies);

  const handleSubmit = (val) => {
    dispatch(createCompany({ dispatch, payload: val }))
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
        }}
      >
        Create Company
      </PrimaryButton>
      <Drawer
        formRef={formRef}
        title="Create Company"
        setOpen={setOpen}
        open={open}
        isLoading={false}
      >
        <CompanyForm
          isEdit={false}
          formRef={formRef}
          initialValues={companyInitialValues}
          handleSubmit={handleSubmit}
        />
      </Drawer>
    </>
  );
};

CompanyCreate.propTypes = {};

export default CompanyCreate;
