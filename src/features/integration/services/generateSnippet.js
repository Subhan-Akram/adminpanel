import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateSnippet as generateSnippetApi } from "apiTwg";

import { triggerAlert } from "slice/alertSlice";

const generateSnippet = createAsyncThunk(
  "integration/generateSnippet",
  async ({ payload, dispatch }, { rejectWithValue }) => {
    try {
      const generatedCode = await generateSnippetApi(payload);
      return generatedCode.data;
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

export default generateSnippet;
