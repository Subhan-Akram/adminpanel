import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { deleteModel as deleteModelApi } from "apiTwg/aiModelController";

const deleteModel = createAsyncThunk(
  "deleteModel",
  async ({ dispatch, extId }, { rejectWithValue }) => {
    try {
      const { data } = await deleteModelApi(extId);
      console.log("data", data);
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

export default deleteModel;
