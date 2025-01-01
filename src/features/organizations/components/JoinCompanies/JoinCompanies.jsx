/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Typography,
  Autocomplete,
  TextField,
  IconButton,
} from "@mui/material";
import {
  OutlinedButton,
  PrimaryButton,
  SullyTypography,
} from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { joinCompanies } from "../../services";
import { triggerAlert } from "../../../../slice/alertSlice";
import { JoinOrganizationWrapper } from "./style";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { AutoCompleteStyledPopperWrapper } from "globalStyles";
import { deleteCompany, getCompanies } from "features/companies";

const JoinCompanies = ({ open, setOpen, row }) => {
  const { crudLoading } = useSelector((state) => state.organizations);
  const { companies } = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  const [selectedOrganization, setSelectedOrganization] = useState(
    row?.companies
  );

  const handleModal = (val) => {
    setOpen(val);
  };

  const handleSubmit = async () => {
    const { extId } = row;
    const payload = {
      extId,
      companyExtIds: selectedOrganization.map((val) => val.extId),
    };
    const res = await dispatch(
      joinCompanies({
        dispatch,
        payload,
      })
    );
    if (res.payload) {
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Organizations Joined Successfully",
          alertType: "success",
        })
      );
      setOpen(false);
    }
  };
  useEffect(() => {
    if (!companies.length) {
      dispatch(getCompanies({ dispatch }));
    }
  }, []);
  return (
    <JoinOrganizationWrapper
      open={open}
      onClose={() => {
        handleModal(false);
      }}
    >
      <DialogTitle>Join Companies</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => {
          handleModal(false);
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Box>
          <SullyTypography classNameProps={"modaltitle1 modal_title"}>
            Add New Companies
          </SullyTypography>
          <Autocomplete
            className="autocomplete_tags"
            multiple
            size="small"
            id="tags-outlined"
            options={companies}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            value={selectedOrganization}
            onChange={(_, val) => {
              setSelectedOrganization(val);
            }}
            sx={{ width: "100%" }}
            PopperComponent={(props) => (
              <AutoCompleteStyledPopperWrapper
                {...props}
                placement="bottom-start"
              />
            )}
            ChipProps={{
              deleteIcon: (
                <CloseOutlinedIcon
                  style={{
                    color: "var(--tag-text-icon-selected)",
                    fontSize: "15px",
                  }}
                />
              ),
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Add Company" />
            )}
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
        <PrimaryButton isLoading={crudLoading} onClick={handleSubmit}>
          Save
        </PrimaryButton>
      </DialogActions>
    </JoinOrganizationWrapper>
  );
};

export default JoinCompanies;
