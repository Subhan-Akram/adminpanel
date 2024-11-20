import slice from "./slice";
import { getChatPrompts, getRecommendedPrompts, getModel } from "../services";

const {
  swapModels,
  clearPromptData,
  addPromptQuery,
  removeModelPromptData,
  removeComparisionData,
  addTryPrompt,
  resetComparisonData,
  removeTryPromptData,
} = slice.actions;

export {
  swapModels,
  resetComparisonData,
  removeTryPromptData,
  getModel,
  addTryPrompt,
  removeComparisionData,
  clearPromptData,
  getChatPrompts,
  getRecommendedPrompts,
  addPromptQuery,
  removeModelPromptData,
};

export default slice.reducer;
