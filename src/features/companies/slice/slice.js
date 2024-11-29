import { createSlice } from "@reduxjs/toolkit";
import {
  createCompany,
  getCompanies,
  updateCompany,
  deleteCompany,
  joinOrganization,
} from "../services";

const initialState = {
  companies: [],
  isLoading: true,
  crudLoading: false,
  error: "",
};

export const slice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCompany.pending, (state) => {
        state.crudLoading = true;
        state.error = null;
      })
      .addCase(createCompany.fulfilled, (state, action) => {
        const company = action.payload;
        state.crudLoading = false;
        state.companies = [company, ...state.companies];
      })
      .addCase(createCompany.rejected, (state) => {
        state.crudLoading = false;
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
        state.crudLoading = true;
        state.error = null;
      })
      .addCase(updateCompany.fulfilled, (state, action) => {
        const company = action.payload;
        state.crudLoading = false;
        const findIndex = state.companies.findIndex(
          (val) => val.extId === company.extId
        );
        state.companies[findIndex] = company;
      })
      .addCase(updateCompany.rejected, (state) => {
        state.crudLoading = false;
      })
      .addCase(deleteCompany.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCompany.fulfilled, (state, action) => {
        const company = action.payload;
        state.companies = state.companies.filter(
          (val) => val.extId !== company.extId
        );
        state.isLoading = false;
      })
      .addCase(deleteCompany.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(joinOrganization.pending, (state) => {
        state.crudLoading = true;
        state.error = null;
      })
      .addCase(joinOrganization.fulfilled, (state, action) => {
        const company = action.payload;
        state.crudLoading = false;
        const findIndex = state.companies.findIndex(
          (val) => val.extId === company.extId
        );
        state.companies[findIndex] = company;
      })
      .addCase(joinOrganization.rejected, (state) => {
        state.crudLoading = false;
      });
  },
});

export default slice;
