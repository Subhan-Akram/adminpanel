import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSingleModelSet } from "apiTwg";

import { triggerAlert } from "slice/alertSlice";
import { downloadFile } from "utils";
import {
  getAllModelSet,
  setIsSaveKeyReminderOpen,
  setSecurityKey,
} from "../slice";

const createModelSet = createAsyncThunk(
  "integration/createModelSet",
  async ({ payload, dispatch }, { rejectWithValue }) => {
    try {
      const { modelExtIds } = payload;
      const { data } = await createSingleModelSet(modelExtIds);
      downloadFile(data.integrationToken, "Security Key");
      dispatch(setSecurityKey(data.integrationToken));
      dispatch(setIsSaveKeyReminderOpen(true));
      dispatch(getAllModelSet());
      return data;
    } catch (error) {
      dispatch(
        triggerAlert({
          title: "Api Failed",
          text: error?.message,
          alertType: "error",
        }),
      );
      return rejectWithValue(error.response.data);
    }
  },
);

export default createModelSet;
