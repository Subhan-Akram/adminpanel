import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { createOrganization as createOrganizationApi } from "../../../apiTwg";

const createOrganization = createAsyncThunk(
  "createOrganization",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { data } = await createOrganizationApi(payload);
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Organization Created Successfully",
          alertType: "success",
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

export default createOrganization;
