/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import { Box, IconButton } from "@mui/material";
import { OutlinedButton, PrimaryButton } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { updateOrganization } from "../../services";
import { triggerAlert } from "../../../../slice/alertSlice";
import OrganizationForm from "../OrganizationForm";
import CloseIcon from "@mui/icons-material/Close";

const OrganizationModal = ({ open, setOpen, organization }) => {
  const formRef = useRef(null);
  const { crudLoading } = useSelector((state) => state.organizations);
  const dispatch = useDispatch();
  const handleModal = (val) => {
    setOpen(val);
  };
  const handleSubmit = async (val) => {
    const { payload } = await dispatch(
      updateOrganization({ dispatch, payload: val })
    );
    if (payload) {
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Organization Updated Successfully",
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
        <DialogTitle>{"Edit Organization"}</DialogTitle>
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
            <OrganizationForm
              isEdit={true}
              ref={formRef}
              initialValues={organization}
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
      </Dialog>
    </React.Fragment>
  );
};

OrganizationModal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  type: PropTypes.string,
};

export default OrganizationModal;
