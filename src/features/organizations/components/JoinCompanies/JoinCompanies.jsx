import { useEffect, useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Autocomplete, TextField, IconButton } from "@mui/material";
import { OutlinedButton, PrimaryButton, SullyTypography } from "components";
import { useDispatch, useSelector } from "react-redux";
import { joinCompanies } from "../../services";
import { triggerAlert } from "../../../../slice/alertSlice";
import { JoinOrganizationWrapper } from "./style";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { AutoCompleteStyledPopperWrapper } from "globalStyles";
import { getCompanies } from "../../services";

const JoinCompanies = ({ open, setOpen, row }) => {
  const { companies, crudLoading } = useSelector(
    (state) => state.organizations,
  );
  const dispatch = useDispatch();

  const [selectedOrganization, setSelectedOrganization] = useState(
    row?.companies,
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
      }),
    );
    if (res.payload) {
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Organizations Joined Successfully",
          alertType: "success",
        }),
      );
      setOpen(false);
    }
  };
  useEffect(() => {
    if (!companies.length) {
      dispatch(getCompanies({ dispatch }));
    }
  }, [companies.length, dispatch]);
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
