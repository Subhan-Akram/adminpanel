import slice from "./slice";

export const {
  addModelTag,
  removeModelTag,
  setCollectionByName,
  resetCollection,
  swapModels,
  setSearchDone,
} = slice.actions;

export default slice.reducer;
