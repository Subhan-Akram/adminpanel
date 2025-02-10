import { createSlice } from "@reduxjs/toolkit";
import {
  createCompany,
  getCompanies,
  updateCompany,
  deleteCompany,
  addOrganization,
  getOrganizations,
  leaveOrganization,
} from "../services";

const initialState = {
  companies: [],
  organizations: [],
  isLoading: false,
  crudLoading: false,
  error: "",
  leaveOrganizationLoading: false,
  organizationLoading: false,
  selectedCompany: { organizations: [] },
};

export const slice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setSelectedCompany: (state, action) => {
      state.selectedCompany = action.payload;
    },
  },
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
          (val) => val.extId === company.extId,
        );
        state.companies[findIndex] = company;
      })
      .addCase(updateCompany.rejected, (state) => {
        state.crudLoading = false;
      })
      .addCase(deleteCompany.pending, (state) => {
        state.crudLoading = true;
        state.error = null;
      })
      .addCase(deleteCompany.fulfilled, (state, action) => {
        const company = action.payload;
        state.companies = state.companies.filter(
          (val) => val.extId !== company.extId,
        );
        state.crudLoading = false;
      })
      .addCase(deleteCompany.rejected, (state) => {
        state.crudLoading = false;
      })
      .addCase(addOrganization.pending, (state) => {
        state.crudLoading = true;
        state.error = null;
      })
      .addCase(addOrganization.fulfilled, (state, action) => {
        const company = action.payload;
        state.crudLoading = false;
        const findIndex = state.companies.findIndex(
          (val) => val.extId === company.extId,
        );
        state.companies[findIndex] = company;
      })
      .addCase(addOrganization.rejected, (state) => {
        state.crudLoading = false;
      })
      .addCase(getOrganizations.pending, (state) => {
        state.organizationLoading = true;
        state.error = null;
      })
      .addCase(getOrganizations.fulfilled, (state, action) => {
        const organizations = action.payload;
        state.organizationLoading = false;
        state.organizations = organizations;
      })
      .addCase(getOrganizations.rejected, (state) => {
        state.organizationLoading = false;
      })
      .addCase(leaveOrganization.pending, (state) => {
        state.leaveOrganizationLoading = true;
        state.error = null;
      })
      .addCase(leaveOrganization.fulfilled, (state, action) => {
        const company = action.payload;
        state.leaveOrganizationLoading = false;
        const findIndex = state.companies.findIndex(
          (val) => val.extId === company.extId,
        );
        state.companies[findIndex] = company;
        state.selectedCompany = company;
      })
      .addCase(leaveOrganization.rejected, (state) => {
        state.leaveOrganizationLoading = false;
      });
  },
});

export default slice;
