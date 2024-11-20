import { FolderDynamicIcon, SwapIcon } from "sullyIcons";
import { LlmCardWrapper } from "./style";
import { OutlinedButton, SullyTypography } from "components";
import Add from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { setCollectionByName } from "features/home";
import { useDispatch } from "react-redux";
import { setModelsArray } from "features/models/slice";

const AddLlmCard = ({ setIsLlmModalOpen, index, isCardSelected }) => {
  const dispatch = useDispatch();
  return (
    <>
      <LlmCardWrapper isCardSelected={isCardSelected}>
        <Box className="add_llm_container" sx={{ position: "relative" }}>
          <FolderDynamicIcon width={"100px"} height={"100px"} />
          <SullyTypography classNameProps="card_title_1">
            No LLM Selected for Comparison
          </SullyTypography>
          <OutlinedButton
            className="primary_1"
            onClick={() => {
              setIsLlmModalOpen(true);
              dispatch(setModelsArray({ name: "selectedModels", data: [] }));
              dispatch(setCollectionByName({ name: "tags", data: [] }));
            }}
            startIcon={<Add />}
          >
            Add LLM Model
          </OutlinedButton>
          {index < 2 ? (
            <Box className="right_box_1">
              <SwapIcon />
            </Box>
          ) : (
            ""
          )}
        </Box>
      </LlmCardWrapper>
    </>
  );
};
AddLlmCard.propTypes = {
  setIsLlmModalOpen: PropTypes.func,
  index: PropTypes.number,
  isCardSelected: PropTypes.bool,
};
export default AddLlmCard;
