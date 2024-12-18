import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { joinCompanies as joinCompaniesApi } from "../../../apiTwg";

const joinCompanies = createAsyncThunk(
  "joinOrganization",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { extId, companyExtIds } = payload;

      const { data } = await joinCompaniesApi(extId, companyExtIds);
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

export default joinCompanies;
