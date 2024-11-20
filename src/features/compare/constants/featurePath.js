const featurePath = (isSearch) => ({
  path: `/model-comparision/feature?search=${isSearch}`,
  label: "Compare",
});

export default featurePath;
