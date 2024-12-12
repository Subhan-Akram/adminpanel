import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import CompanyForm from "../CompanyForm";
import { companyInitialValues } from "../../constants";
import { Box, IconButton } from "@mui/material";
import { OutlinedButton, PrimaryButton } from "../../../../components";
import { triggerAlert } from "../../../../slice/alertSlice";
import { createCompany } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
const CreateCompanyModal = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { crudLoading } = useSelector((state) => state.companies);
  const handleModal = (val) => {
    setOpen(val);
  };
  const handleSubmit = async (val) => {
    const { payload } = await dispatch(
      createCompany({ dispatch, payload: val })
    );
    console.log("payload", payload);
    if (payload) {
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Company Updated Successfully",
          alertType: "success",
        })
      );
      setOpen(false);
    }
  };

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
        <IconButton
          aria-label="close"
          onClick={() => {
            handleModal(false);
          }}
        >
          <CloseIcon />
        </IconButton>
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
          <PrimaryButton isLoading={crudLoading} onClick={handleFormSubmit}>
            Submit
          </PrimaryButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

CreateCompanyModal.propTypes = {
  children: PropTypes.node,
};

export default CreateCompanyModal;
