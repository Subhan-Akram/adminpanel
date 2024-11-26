import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import CompanyForm from "../CompanyForm";
import { companyInitialValues } from "../../constants";
import { Box } from "@mui/material";
import { OutlinedButton, PrimaryButton } from "../../../../components";

const CreateCompanyModal = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const formRef = useRef(null);

  const handleModal = (val) => {
    setOpen(val);
  };
  const handleSubmit = () => {};

  const handleFormSubmit = () => {
    formRef.current?.submitForm();
  };

  return (
    <React.Fragment>
      <div
        onClick={(e) => {
          e.stopPropagation(); // Prevent event bubbling
          handleModal(true);
        }}
        style={{ display: "inline-block" }}
      >
        {children}
      </div>
      <Dialog
        open={open}
        onClose={() => {
          handleModal(false);
        }}
      >
        <DialogTitle>Create Company</DialogTitle>
        <DialogContent>
          <Box sx={{ marginTop: "1rem" }}>
            <CompanyForm
              ref={formRef}
              initialValues={companyInitialValues}
              handleSubmit={handleSubmit}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <OutlinedButton
            onClick={() => {
              handleModal(false);
            }}
          >
            Cancel
          </OutlinedButton>
          <PrimaryButton onClick={handleFormSubmit}>Submit</PrimaryButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

CreateCompanyModal.propTypes = {
  children: PropTypes.node,
};

export default CreateCompanyModal;
