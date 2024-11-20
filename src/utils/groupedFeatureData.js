const groupedFeatureData = (data, modelCollection) => {
  const groupedData = data.reduce((acc, item) => {
    const {
      modelExtId,
      modelName,
      modelCode,
      title,
      description,
      category,
      ordinal,
    } = item;

    if (!acc[modelExtId]) {
      acc[modelExtId] = {
        modelExtId,
        modelName,
        modelCode,
        features: [],
      };
    }
    acc[modelExtId].features.push({ title, description, category, ordinal });

    return acc;
  }, {});
  const groupedArray = Object.values(groupedData);
  groupedArray.forEach((group) => {
    const match = modelCollection.find((model) => {
      return model.extId === group.modelExtId;
    });
    if (match) {
      group.logoUrl = match.logoUrl;
      group.extId = match.extId;
      group.createdBy = match.createdBy;
      group.rating = match.rating;
    }
  });

  const transformedData = groupedArray.map((model) => {
    const groupedFeatures = model.features.reduce((acc, feature) => {
      const { category, title, description } = feature;

      if (!acc[category]) {
        acc[category] = { title: category, listItems: [] };
      }

      acc[category].listItems.push({ title, description });
      return acc;
    }, {});

    return {
      name: model.modelName,
      extId: model.modelExtId,
      createdBy: model.createdBy,
      rating: model.rating,
      logoUrl: model.logoUrl,
      features: Object.values(groupedFeatures),
    };
  });
  return transformedData;
};

export default groupedFeatureData;
