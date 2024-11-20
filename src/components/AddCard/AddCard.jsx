import { AddCardWrapper } from "./style";
import { FolderDynamicIcon } from "sullyIcons";
import { OutlinedButton, SullyTypography } from "components";
import Add from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import { setCollectionByName } from "features/home";
import { useDispatch } from "react-redux";
import { setModelsArray } from "features/models/slice";
const AddCard = ({ title, btnText, handleClick }) => {
  const dispatch = useDispatch();
  return (
    <AddCardWrapper>
      <FolderDynamicIcon width={"165px"} height={"165px"} />
      <SullyTypography classNameProps="card_title_1">{title}</SullyTypography>
      <OutlinedButton
        className="primary_1"
        onClick={() => {
          handleClick(true);
          dispatch(setModelsArray({ name: "selectedModels", data: [] }));
          dispatch(setCollectionByName({ name: "tags", data: [] }));
        }}
        startIcon={<Add />}
      >
        {btnText}
      </OutlinedButton>
    </AddCardWrapper>
  );
};
AddCard.propTypes = {
  title: PropTypes.string,
  btnText: PropTypes.string,
  handleClick: PropTypes.func,
};
export default AddCard;
