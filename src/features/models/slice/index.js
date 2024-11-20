import slice from "./slice";

export const {
  removeSelectedModel,
  addSelectedModel,
  removeModels,
  setModelsArray,
  setModel,
  setSelectedModelLength,
} = slice.actions;

export default slice.reducer;
