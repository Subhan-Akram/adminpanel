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

const JoinCompaniesModal = ({
  open,
  setOpen,
  row,
  availableOrganizations = [
    {
      name: "Alerois Corp",
      extId: "66dd59be-1a92-4b6e-8361-1b97601327a8",
      enabled: true,
      subscriber: false,
      privateData: false,
      organizations: [
        {
          name: "Alerois Corp",
          extId: "353b66d6-7c9c-47d5-b0bc-3dd6fd61d73e",
          enabled: true,
          subscriber: false,
        },
      ],
    },
    {
      name: "ThisWay Global",
      extId: "8fe3ab48-f98f-40cd-a610-28d8b56a9fbe",
      enabled: true,
      subscriber: false,
      privateData: false,
      organizations: [
        {
          name: "ThisWay Global",
          extId: "4c829bca-5976-4812-900d-f14a088fbf07",
          enabled: true,
          subscriber: false,
        },
      ],
    },
    {
      name: "General Admission",
      extId: "5d0b2520-70fa-405d-aa9e-c9b1be0c8add",
      enabled: true,
      subscriber: false,
      privateData: false,
      organizations: [
        {
          name: "General Admission",
          extId: "328d129b-b114-4db7-bfeb-b3411633d182",
          enabled: true,
          subscriber: false,
        },
      ],
    },
  ],
}) => {
  const { crudLoading } = useSelector((state) => state.organizations);
  const dispatch = useDispatch();

  const [selectedOrganization, setSelectedOrganization] = useState(
    row?.companies
  );

  const handleModal = (val) => {
    setOpen(val);
  };

  console.log("selectedOrganization", selectedOrganization, "row", row);

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
    console.log("payload__", payload);
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
            options={availableOrganizations}
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

export default JoinCompaniesModal;
