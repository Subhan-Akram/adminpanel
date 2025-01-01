import React, { useRef } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import CompanyForm from "../CompanyForm";
import { Box, IconButton } from "@mui/material";
import { OutlinedButton, PrimaryButton } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { updateCompany } from "../../services";
import { triggerAlert } from "../../../../slice/alertSlice";
import CloseIcon from "@mui/icons-material/Close";
import { CompanyEditWrapper } from "./style";

const CompanyEdit = ({ open, setOpen, company }) => {
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
    <CompanyEditWrapper
      open={open}
      onClose={() => {
        handleModal(false);
      }}
    >
      <DialogTitle>{"Edit Company"}</DialogTitle>
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
          Save
        </PrimaryButton>
      </DialogActions>
    </CompanyEditWrapper>
  );
};

CompanyEdit.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  type: PropTypes.string,
};

export default CompanyEdit;
