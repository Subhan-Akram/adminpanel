/* eslint-disable no-unused-vars */
import { ModelCardWrapper } from "./style";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { SwapIcon } from "sullyIcons";
import { useDispatch, useSelector } from "react-redux";
import { swapModels } from "features/compare";
import SelectedModelHeader from "../SelectedModelHeader";
import PromptChat from "../PromptChat";
import { Chip, DropDown, LogoFrame, SullyTypography } from "components";
import { modelDropDownItems } from "features/models/constants";

const ModelCompareCard = ({ data, index }) => {
  const { promptData } = useSelector((state) => state.compare);
  const { selectedModels } = useSelector((state) => state.models);

  const dispatch = useDispatch();
  const totalSelectedModels = selectedModels.length;
  const isSwapIconShow =
    (totalSelectedModels === 3 && index < 2) ||
    (totalSelectedModels === 2 && index === 0);

  return (
    <>
      <ModelCardWrapper>
        <Box>
          <SelectedModelHeader model={data} />
          <PromptChat model={data} />
        </Box>

        {promptData.length && isSwapIconShow ? (
          <Box
            onClick={() => {
              dispatch(swapModels(index));
            }}
            className={`right_box_feature_icon ${"active_swap"}`}
          >
            <SwapIcon />
          </Box>
        ) : (
          ""
        )}
      </ModelCardWrapper>
    </>
  );
};

ModelCompareCard.propTypes = {
  data: PropTypes.object,
  isIntegrated: PropTypes.bool,
  index: PropTypes.number,
};

export default ModelCompareCard;
