import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { addOrganization as addOrganizationApi } from "../../../apiTwg";

const addOrganization = createAsyncThunk(
  "addOrganization",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { extId, organizationExtIds } = payload;
      const { data } = await addOrganizationApi(extId, organizationExtIds);
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Organizations Joined Successfully",
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

export default addOrganization;
