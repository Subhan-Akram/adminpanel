import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { leaveOrganization as leaveOrganizationApi } from "apiTwg";

const leaveOrganization = createAsyncThunk(
  "leaveOrganziation",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { extId, organizationExtIds } = payload;
      const { data } = await leaveOrganizationApi(extId, organizationExtIds);
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Organziations removed from companies Successfully",
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

export default leaveOrganization;
