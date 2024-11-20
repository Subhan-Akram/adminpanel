export const modelPath = (isSearch) => ({
  path: `/model-search?search=${isSearch}`,
  label: "Search Result",
});

export default modelPath;
