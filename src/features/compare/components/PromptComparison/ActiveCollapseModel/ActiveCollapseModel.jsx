import { Collapse, Box, IconButton } from "@mui/material";
import { CollapseWrapper, CollapsibleContent } from "./Style";
import { SullyTypography } from "components";
import { ArrowDown, CloseIcon } from "sullyIcons";
import { useSelector } from "react-redux";
import Add from "@mui/icons-material/Add";
import PropTypes from "prop-types";

const ActiveCollapseModel = ({
  open,
  setOpen,
  handleModal,
  handleRemoveModal,
}) => {
  const { mergeSelectedModelsCollection } = useSelector((state) => state.home);
  const filterMergeCollection = mergeSelectedModelsCollection.filter(
    (val) => val.extId,
  );
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <CollapseWrapper>
      {
        <Box onClick={handleToggle} className="open_collapse_header">
          <SullyTypography classNameProps="collapse_text">
            {`Active LLM'S`}
          </SullyTypography>
          <Box className="icon_box">
            <ArrowDown />
          </Box>
        </Box>
      }
      <Collapse in={open}>
        <CollapsibleContent>
          {filterMergeCollection.map(({ name, extId, logoUrl }) => (
            <Box key={extId} className="active_model_box">
              <Box className="inner_box">
                <Box className="icon">
                  <img src={logoUrl} alt="" />
                </Box>
                <SullyTypography>{name}</SullyTypography>
              </Box>
              <IconButton
                className="close"
                onClick={() => {
                  handleRemoveModal({ extId, name });
                }}
              >
                {" "}
                <CloseIcon />
              </IconButton>
            </Box>
          ))}
          {filterMergeCollection.length < 3 ? (
            <Box
              onClick={() => {
                handleModal(true);
              }}
              className="add_model_box"
            >
              <Add />
              <SullyTypography classNameProps="button_primary_text">
                Add another Model
              </SullyTypography>
            </Box>
          ) : (
            ""
          )}
        </CollapsibleContent>
      </Collapse>
    </CollapseWrapper>
  );
};

ActiveCollapseModel.propTypes = {
  handleModal: PropTypes.func,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  handleRemoveModal: PropTypes.func,
};
export default ActiveCollapseModel;
