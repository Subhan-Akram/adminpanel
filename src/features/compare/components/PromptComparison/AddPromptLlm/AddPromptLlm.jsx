import { AddPromptLlmWrapper } from "./Style";
import { FolderIcon } from "sullyIcons";
import { OutlinedButton, SullyTypography } from "components";
import Add from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import { setCollectionByName } from "features/home";
import { useDispatch } from "react-redux";
import { setModelsArray } from "features/models/slice";
export default function AddPromptLlm({ handleModal }) {
  const dispatch = useDispatch();
  return (
    <AddPromptLlmWrapper
      onClick={() => {
        dispatch(setModelsArray({ name: "selectedModels", data: [] }));
        dispatch(setCollectionByName({ name: "tags", data: [] }));
        handleModal(true);
      }}
    >
      <FolderIcon />
      <SullyTypography classNameProps="card_title_1">
        No LLM Selected for Prompt Comparison
      </SullyTypography>
      <OutlinedButton
        className="primary_1"
        onClick={() => {
          handleModal(true);
          dispatch(setCollectionByName({ name: "tags", data: [] }));
        }}
        startIcon={<Add />}
      >
        Add LLM Model
      </OutlinedButton>
    </AddPromptLlmWrapper>
  );
}

AddPromptLlm.propTypes = {
  handleModal: PropTypes.func,
};
