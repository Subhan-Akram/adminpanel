import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOperationStats } from "apiTwg";
import { transformStatsData } from "features/utils";
import { triggerAlert } from "slice/alertSlice";

const getStats = createAsyncThunk(
  "getStats",
  async ({ dispatch }, { rejectWithValue }) => {
    try {
      const { data } = await getOperationStats();
      const transoformData = transformStatsData(data);
      return transoformData;
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

export default getStats;
