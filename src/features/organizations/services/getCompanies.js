import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { getCompanies as getCompaniesApi } from "../../../apiTwg";

const getCompanies = createAsyncThunk(
  "getCompanies",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { data } = await getCompaniesApi(payload);
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

export default getCompanies;
