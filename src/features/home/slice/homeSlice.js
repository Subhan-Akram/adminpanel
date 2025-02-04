import { createSlice } from "@reduxjs/toolkit";
import { getStats } from "../services";
import statsData from "../constants";
import { transformStatsData } from "features/utils";

const initialState = {
  stats: statsData,
  isLoading: false,
  error: "",
};

export const slice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStats.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStats.fulfilled, (state, action) => {
        const stats = action.payload;
        state.isLoading = false;
        state.stats = stats;
      })
      .addCase(getStats.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default slice;
