import React, { useImperativeHandle } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Grid,
  FormControl,
  Switch,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
  Autocomplete,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { CompanyFormWrapper } from "./style";
import PropTypes from "prop-types";
import { companyValidation } from "features/companies/constants";
import {
  AutoCompleteStyledPopperWrapper,
  InputLabelWrapper,
} from "globalStyles";
import { leaveOrganization } from "features/companies/services";
import { useDispatch, useSelector } from "react-redux";
import { Chip, ConfirmDynamicModal } from "components";

const CompanyForm = ({
  handleSubmit: handleSubmitAction,
  isEdit = false,
  formRef,
}) => {
  const { organizations } = useSelector((state) => state.organizations);

  const { selectedCompany, leaveOrganizationLoading } = useSelector(
    (state) => state.companies,
  );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { ...selectedCompany, organizations: [] },
    validationSchema: companyValidation,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmitAction(values);
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
    setFieldValue,
    submitForm,
  } = formik;
  useImperativeHandle(formRef, () => ({
    submitForm: submitForm,
  }));

  const handleLeaveOrganziation = async (organizationExtIds) => {
    const { extId } = selectedCompany;
    return dispatch(
      leaveOrganization({
        dispatch,
        payload: { extId, organizationExtIds },
      }),
    ).unwrap();
  };

  return (
    <CompanyFormWrapper
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Grid container spacing={"24px"}>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <label htmlFor="name">Name</label>
            <TextField
              variant="outlined"
              placeholder="Company Name"
              size="small"
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
          <FormControl fullWidth>
            <label htmlFor="domain">Domain</label>
            <TextField
              variant="outlined"
              placeholder="Company Domain"
              size="small"
              id="domain"
              name="domain"
              value={values.domain}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.domain && Boolean(errors.domain)}
              helperText={touched.domain && errors.domain}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <InputLabelWrapper
            className="InputLabelWrapper_text"
            htmlFor="organizations"
          >
            Add Organizations
          </InputLabelWrapper>
          <Autocomplete
            className="autocomplete_tags"
            multiple
            size="small"
            id="organizations"
            options={organizations.map((val) => val)}
            getOptionLabel={(option) => {
              return option?.name;
            }}
            isOptionEqualToValue={(option, value) => {
              return option.extId === value.extId;
            }}
            value={values.organizations}
            onChange={(_, val) => {
              setFieldValue("organizations", val);
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
              <TextField {...params} placeholder="Add Organizations" />
            )}
          />
        </Grid>

        {isEdit && (
          <Grid item xs={12}>
            <InputLabelWrapper
              className="InputLabelWrapper_text"
              htmlFor="organziation"
            >
              Joined Organziations
            </InputLabelWrapper>
            <Box className="join_organization_container">
              {selectedCompany.organizations.map(({ name, extId }) => (
                <ConfirmDynamicModal
                  key={name}
                  title="Leave Organization"
                  description={`Are you sure, you want to leave ${name} Organization ?`}
                  handleSubmit={() => handleLeaveOrganziation([extId])}
                  isLoading={leaveOrganizationLoading}
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
        <Grid className="switches_items" item md={4}>
          <label>Status</label>
          <div className="label_div">
            <FormControlLabel
              control={
                <Switch
                  id="enabled"
                  name="enabled"
                  checked={values.enabled}
                  onChange={(e) => setFieldValue("enabled", e.target.checked)}
                />
              }
              label="Enabled"
            />
          </div>
        </Grid>

        <Grid item xs={4}>
          <Box>
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
          </Box>
        </Grid>
        <Grid item xs={4}>
          <label>Private Data</label>
          <RadioGroup
            value={values.privateData}
            onChange={(e) => {
              const { value } = e.target;
              setFieldValue("privateData", value);
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
      </Grid>
    </CompanyFormWrapper>
  );
};
CompanyForm.propTypes = {
  handleSubmit: PropTypes.func,
  isEdit: PropTypes.bool,
};
export default CompanyForm;
