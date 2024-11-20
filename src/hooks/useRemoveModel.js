/* eslint-disable no-debugger */
import { getPromptModelName } from "features/compare";
import { removeModelPromptData } from "features/compare";
import { removeComparisionData } from "features/compare/slice";
import { removeSelectedModel } from "features/models";
import { useDispatch } from "react-redux";

const useRemoveModel = () => {
  const dispatch = useDispatch();
  const handleRemoveModel = (extId) => {
    dispatch(removeSelectedModel(extId));
    dispatch(removeComparisionData(extId));
    dispatch(removeModelPromptData(getPromptModelName(extId)));
  };

  return { handleRemoveModel };
};

export default useRemoveModel;
