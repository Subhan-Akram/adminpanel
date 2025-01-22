import { useEffect, useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Autocomplete, TextField, IconButton } from "@mui/material";
import { OutlinedButton, PrimaryButton, SullyTypography } from "components";
import { useDispatch, useSelector } from "react-redux";
import { addOrganization, getOrganizations } from "../../services";
import { CompanyJoinOrganizationWrapper } from "./style";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { AutoCompleteStyledPopperWrapper } from "globalStyles";

const CompanyJoinOrganization = ({ open, setOpen, company }) => {
  const { crudLoading, organizations } = useSelector(
    (state) => state.companies,
  );
  const dispatch = useDispatch();

  const [selectedOrganization, setSelectedOrganization] = useState(
    company?.organizations,
  );

  const handleModal = (val) => {
    setOpen(val);
  };

  const handleSubmit = async () => {
    const { extId } = company;
    const payload = {
      extId,
      organizationExtIds: selectedOrganization.map((val) => val.extId),
    };
    dispatch(
      addOrganization({
        dispatch,
        payload,
      }),
    )
      .unwrap()
      .then(() => {
        setOpen(false);
      });
  };
  useEffect(() => {
    if (!organizations.length) {
      dispatch(getOrganizations({ dispatch }));
    }
  }, [dispatch, organizations.length]);
  return (
    <CompanyJoinOrganizationWrapper
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
            PopperComponent={(props) => (
              <AutoCompleteStyledPopperWrapper
                {...props}
                placement="bottom-start"
              />
            )}
            ChipProps={{
              deleteIcon: <CloseOutlinedIcon className="close_chip" />,
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
    </CompanyJoinOrganizationWrapper>
  );
};

export default CompanyJoinOrganization;
