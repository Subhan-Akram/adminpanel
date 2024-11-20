const getModelNames = (models) => {
  return models
    .map((model) => model.name)
    .join(", ")
    .replace(/, ([^,]*)$/, " and $1"); // Join the models.
};

export default getModelNames;
