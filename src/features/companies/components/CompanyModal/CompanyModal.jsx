/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import CompanyForm from "../CompanyForm";
import { Box } from "@mui/material";
import { OutlinedButton, PrimaryButton } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { updateCompany } from "../../services";
import { triggerAlert } from "../../../../slice/alertSlice";

const CompanyModal = ({ open, setOpen, company }) => {
  const formRef = useRef(null);
  const { crudLoading } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  const handleModal = (val) => {
    setOpen(val);
  };
  const handleSubmit = async (val) => {
    const { payload } = await dispatch(
      updateCompany({ dispatch, payload: val })
    );
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
      <Dialog
        open={open}
        onClose={() => {
          handleModal(false);
        }}
      >
        <DialogTitle>{"Edit Company"}</DialogTitle>
        <DialogContent>
          <Box sx={{ marginTop: "1rem" }}>
            <CompanyForm
              isEdit={true}
              ref={formRef}
              initialValues={company}
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

CompanyModal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  type: PropTypes.string,
};

export default CompanyModal;
