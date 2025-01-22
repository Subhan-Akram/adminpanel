import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { addModelTags as addModelTagsApi } from "apis";

const addModelTags = createAsyncThunk(
  "addModelTags",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { data } = await addModelTagsApi(payload);
      return data;
    } catch (error) {
      dispatch(
        triggerAlert({
          title: "Api Failed",
          text: error?.message,
          alertType: "error",
        })
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export default addModelTags;
