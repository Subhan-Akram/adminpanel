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
import { joinOrganization } from "../../services";
import { deleteOrganization, getOrganizations } from "features/organizations";
import { triggerAlert } from "../../../../slice/alertSlice";

import { JoinOrganizationWrapper } from "./style";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { AutoCompleteStyledPopperWrapper } from "globalStyles";

const JoinOrganizationModal = ({
  open,
  setOpen,
  row,
  // availableOrganizations = [
  //   {
  //     name: "ThisWay Global",
  //     extId: "4c829bca-5976-4812-900d-f14a088fbf07",
  //     enabled: true,
  //     subscriber: false,
  //   },
  //   {
  //     name: "Alerois Corp",
  //     extId: "353b66d6-7c9c-47d5-b0bc-3dd6fd61d73e",
  //     enabled: true,
  //     subscriber: false,
  //   },
  // ],
}) => {
  const { crudLoading } = useSelector((state) => state.companies);
  const { organizations } = useSelector((state) => state.organizations);
  const dispatch = useDispatch();

  const [selectedOrganization, setSelectedOrganization] = useState(
    row?.organizations
  );

  const handleModal = (val) => {
    setOpen(val);
  };

  const handleSubmit = async () => {
    const { extId } = row;
    const payload = {
      extId,
      organizationExtIds: selectedOrganization.map((val) => val.extId),
    };
    const res = await dispatch(
      joinOrganization({
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
    if (!organizations.length) {
      dispatch(getOrganizations({ dispatch }));
    }
  }, []);

  return (
    <JoinOrganizationWrapper
      open={open}
      onClose={() => {
        handleModal(false);
      }}
    >
      <DialogTitle>Join Organization</DialogTitle>
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
            Add New Organization
          </SullyTypography>
          <Autocomplete
            className="autocomplete_tags"
            multiple
            size="small"
            id="tags-outlined"
            options={organizations}
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
              <TextField {...params} placeholder="Add Organization" />
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

export default JoinOrganizationModal;
