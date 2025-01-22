import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { updateOrganization as updateOrganizationApi } from "../../../apiTwg";

const updateOrganization = createAsyncThunk(
  "updateOrganization",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { extId } = payload;
      const { data } = await updateOrganizationApi(extId, payload);
      dispatch(
        triggerAlert({
          title: "Success",
          alertType: "success",
          text: "Company Updated Successfully",
        })
      );
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

export default updateOrganization;
