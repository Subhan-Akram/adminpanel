import { createModelSet, getAllModelSet } from "../services";
import slice from "./slice";

export const {
  setModelSet,
  setSecurityKey,
  setIsSaveKeyReminderOpen,
  resetState,
  setCodeSnippet,
} = slice.actions;

export { createModelSet, getAllModelSet };

export default slice.reducer;
