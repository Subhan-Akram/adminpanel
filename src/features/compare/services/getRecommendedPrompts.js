import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRecommendedPrompt } from "apiTwg";
import { triggerAlert } from "slice/alertSlice";

const getRecommendedPrompts = createAsyncThunk(
  "prompt/recommendedPrompts",
  async (dispatch, { rejectWithValue }) => {
    try {
      const response = await getRecommendedPrompt();
      return response.data;
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

export default getRecommendedPrompts;
