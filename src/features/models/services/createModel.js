import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { createModel as createModelApi } from "apis";

const createModel = createAsyncThunk(
  "createModel",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { data } = await createModelApi(payload);
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Model Created Successfully",
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

export default createModel;
