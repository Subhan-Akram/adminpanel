import CompareReducer, {
  clearPromptData,
  removeComparisionData,
  removeModelPromptData,
  swapModels,
  resetComparisonData,
} from "./slice";

import {
  CostComparision,
  FeatureComparision,
  PromptComparison,
  Compare,
  Prompt,
  TryPrompt,
} from "./components";
import { getPromptModelName, getFormattedText } from "./utils";
import { getFearureComparison } from "./services";
import { featurePath, promptPath } from "./constants";
export {
  //components
  CostComparision,
  TryPrompt,
  Prompt,
  FeatureComparision,
  PromptComparison,
  Compare,

  //utils
  getPromptModelName,
  getFormattedText,

  //services
  getFearureComparison,

  //hooks

  //slice
  swapModels,
  removeComparisionData,
  CompareReducer,
  removeModelPromptData,
  clearPromptData,
  resetComparisonData,

  //constants
  promptPath,
  featurePath,
};
