import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { updateModel as updateModelApi, updateModelTags } from "apis";

const updateModel = createAsyncThunk(
  "updateModel",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { extId, tags } = payload;
      await updateModelTags({
        extId,
        tags: tags.map((val) => val.name),
      });
      const { data } = await updateModelApi(payload);
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Model Updated Successfully",
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

export default updateModel;
