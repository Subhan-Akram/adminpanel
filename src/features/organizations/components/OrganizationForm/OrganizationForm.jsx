import React, { useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Grid,
  FormControl,
  Switch,
  FormControlLabel,
  RadioGroup,
  Radio,
  Autocomplete,
  Box,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { OrganizationFormWrapper } from "./style";
import PropTypes from "prop-types";
import { organizationValidation } from "features/organizations/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  AutoCompleteStyledPopperWrapper,
  InputLabelWrapper,
} from "globalStyles";
import { Chip, ConfirmDynamicModal } from "components";
import { leaveCompany } from "features/organizations/services";

const OrganizationForm = ({
  handleSubmit: handleSubmtAction,
  isEdit = false,
  formRef,
}) => {
  const { companies, leaveCompanyLoading, selectedOrganization } = useSelector(
    (state) => state.organizations,
  );
  const formik = useFormik({
    initialValues: { ...selectedOrganization, companies: [] },
    validationSchema: organizationValidation,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmtAction(values);
      setSubmitting(false);
    },
  });
  const {
    handleSubmit,
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    submitForm,
    setFieldValue,
  } = formik;

  useImperativeHandle(formRef, () => ({
    submitForm,
  }));

  const dispatch = useDispatch();

  const handleLeaveCompany = async (companyExtIds) => {
    const { extId } = selectedOrganization;
    return dispatch(
      leaveCompany({
        dispatch,
        payload: { extId, companyExtIds },
      }),
    ).unwrap();
  };

  return (
    <>
      <OrganizationFormWrapper component="form" onSubmit={handleSubmit}>
        <Grid container spacing={"24px"}>
          <Grid item xs={12} md={12}>
            <FormControl fullWidth>
              <label htmlFor="name">Name</label>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Organization Name"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <InputLabelWrapper
              className="InputLabelWrapper_text"
              htmlFor="companies"
            >
              Add Companies
            </InputLabelWrapper>
            <Autocomplete
              className="autocomplete_tags"
              multiple
              size="small"
              id="companies"
              options={companies.filter(
                (val) =>
                  !selectedOrganization?.companies?.some(
                    (org) => org.extId === val.extId,
                  ),
              )}
              getOptionLabel={(option) => {
                return option?.name;
              }}
              isOptionEqualToValue={(option, value) => {
                return option.extId === value.extId;
              }}
              value={values.companies}
              onChange={(_, val) => {
                setFieldValue("companies", val);
              }}
              PopperComponent={(props) => (
                <AutoCompleteStyledPopperWrapper
                  {...props}
                  placement="bottom-start"
                />
              )}
              ChipProps={{
                deleteIcon: <CloseOutlinedIcon className="close_chip_icon" />,
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Add Companies" />
              )}
            />
          </Grid>
          {isEdit && (
            <Grid item xs={12}>
              <InputLabelWrapper
                className="InputLabelWrapper_text"
                htmlFor="companies"
              >
                Joined Companies
              </InputLabelWrapper>
              <Box className="join_companies_container">
                {selectedOrganization.companies.map(({ name, extId }) => (
                  <ConfirmDynamicModal
                    key={name}
                    title="Leave Company"
                    description={`Are you sure, you want to leave ${name} Company ?`}
                    handleSubmit={() => handleLeaveCompany([extId])}
                    isLoading={leaveCompanyLoading}
                  >
                    <Chip
                      classNameProps="modal_card_chips"
                      key={name}
                      label={
                        <div className="label_chip">
                          <span>{name}</span>
                          <CloseOutlinedIcon />
                        </div>
                      }
                    />
                  </ConfirmDynamicModal>
                ))}
              </Box>
            </Grid>
          )}

          <Grid item xs={6} md={6}>
            <label>Subscriber</label>
            <RadioGroup
              value={values.subscriber}
              onChange={(e) => {
                const { value } = e.target;
                setFieldValue("subscriber", value);
              }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                className="radio_btn"
                value={true}
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel
                className="radio_btn"
                value={false}
                control={<Radio />}
                label="No"
              />
            </RadioGroup>
          </Grid>

          {isEdit && (
            <Grid item xs={12} md={6}>
              <label>Status</label>
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      id="enabled"
                      name="enabled"
                      checked={values.enabled}
                      onChange={(e) =>
                        setFieldValue("enabled", e.target.checked)
                      }
                    />
                  }
                  label={values.enabled ? "Enabled" : "Disabled"}
                />
              </div>
            </Grid>
          )}
        </Grid>
      </OrganizationFormWrapper>
    </>
  );
};

OrganizationForm.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func,
  isEdit: PropTypes.bool,
};
export default OrganizationForm;
