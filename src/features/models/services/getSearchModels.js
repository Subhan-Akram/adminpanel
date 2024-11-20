import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchModelsByTags } from "apiTwg";
import { triggerAlert } from "slice/alertSlice";

const getSearchModels = createAsyncThunk(
  "getSearchModels",
  async ({ tags, dispatch, isModal }, { rejectWithValue }) => {
    try {
      const response = await searchModelsByTags(tags);
      const { data: models } = response;
      return { models, isModal };
    } catch ({ message, response: { data } }) {
      dispatch(
        triggerAlert({
          title: "Api Failed",
          text: message,
          alertType: "error",
        }),
      );
      return rejectWithValue(data);
    }
  },
);

export default getSearchModels;
