import { createAsyncThunk } from "@reduxjs/toolkit";
import { promptChat } from "apiTwg";
import { triggerAlert } from "slice/alertSlice";

export const getChatPrompts = createAsyncThunk(
  "prompt/chatPrompt",
  async ({ payload, dispatch, isTryPrompt }, { rejectWithValue }) => {
    try {
      const response = await promptChat(payload);

      return { data: response.data, isTryPrompt };
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

export default getChatPrompts;
