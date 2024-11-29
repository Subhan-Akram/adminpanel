import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { joinOrganization as joinOrganizationApi } from "../../../apiTwg";

const joinOrganization = createAsyncThunk(
  "joinOrganization",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { extId, organizationExtIds } = payload;

      const { data } = await joinOrganizationApi(extId, organizationExtIds);
      console.log("create=====data", data);
      return data;
    } catch (error) {
      console.log("err", error);
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

export default joinOrganization;
