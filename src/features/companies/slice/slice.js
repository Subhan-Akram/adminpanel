import { createSlice } from "@reduxjs/toolkit";
import {
  createCompany,
  getCompanies,
  updateCompany,
  deleteCompany,
} from "../services";

const initialState = {
  companies: [],
  isLoading: false,
  error: "",
};

export const slice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCompany.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createCompany.fulfilled, (state, action) => {
        const company = action.payload;
        state.isLoading = false;
        state.companies = [company, ...state.companies];
      })
      .addCase(createCompany.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getCompanies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCompanies.fulfilled, (state, action) => {
        const companies = action.payload;
        state.isLoading = false;
        state.companies = companies;
      })
      .addCase(getCompanies.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateCompany.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCompany.fulfilled, (state, action) => {
        const company = action.payload;
        state.isLoading = false;
        const findModelIndex = state.companies.findIndex(
          (val) => val.extId === company.extId
        );
        state.models[findModelIndex] = company;
      })
      .addCase(updateCompany.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteCompany.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCompany.fulfilled, (state, action) => {
        const company = action.payload;
        state.users = state.companies.filter(
          (val) => val.extId !== company.extId
        );
      })
      .addCase(deleteCompany.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default slice;
