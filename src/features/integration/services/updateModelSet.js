import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateModelSet as updateModelSetApi } from "apiTwg";
import { triggerAlert } from "slice/alertSlice";

const updateModelSet = createAsyncThunk(
  "integration/updateModelSet",
  async ({ payload, dispatch, modelSetExtId }, { rejectWithValue }) => {
    try {
      const { data } = await updateModelSetApi({
        payload,
        modelSetExtId,
      });
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Model Successfully Integrated",
          alertType: "success",
        }),
      );
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

export default updateModelSet;
