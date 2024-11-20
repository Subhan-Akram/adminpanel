import { SullyTypography } from "components";
import getModelNames from "./getModelNames";

const selectedModelNames = (
  modelsCollection,
  mergeSelectedModelsCollection,
) => {
  const names = [
    getModelNames(modelsCollection, mergeSelectedModelsCollection, 0),
    getModelNames(modelsCollection, mergeSelectedModelsCollection, 1),
    getModelNames(modelsCollection, mergeSelectedModelsCollection, 2),
  ].filter((name) => name); // Remove empty strings (names that don't exist)

  if (names.length === 0) return null; // Return null if no names

  return names.map((name, index) => (
    <SullyTypography classNameProps="modaltitle1" variant="span" key={index}>
      {`\t‘${name}’`}
      {index < names.length - 1
        ? names.length === 2 && index === 0 // For two models
          ? " and "
          : names.length > 2 && index === names.length - 2 // For three models
            ? " and "
            : ", "
        : ""}
    </SullyTypography>
  ));
};

export default selectedModelNames;
