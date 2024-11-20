import { countObjects } from "utils";

const swapHighLight = (i, mergeSelectedModelsCollection) => {
  return (
    (countObjects(mergeSelectedModelsCollection) === 2 && i === 0) ||
    (countObjects(mergeSelectedModelsCollection) === 3 && i === 0) ||
    (countObjects(mergeSelectedModelsCollection) === 3 && i === 1)
  );
};

export default swapHighLight;
