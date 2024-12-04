import { createSlice } from "@reduxjs/toolkit";
import {
  createOrganization,
  getOrganizations,
  updateOrganization,
  deleteOrganization,
  joinCompanies,
} from "../services";

const initialState = {
  organizations: [],
  isLoading: false,
  crudLoading: false,
  error: "",
};

export const slice = createSlice({
  name: "organizations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrganization.pending, (state) => {
        state.crudLoading = true;
        state.error = null;
      })
      .addCase(createOrganization.fulfilled, (state, action) => {
        const organization = action.payload;
        state.crudLoading = false;
        console.log("orgaiuznation===============", organization);
        state.organizations = [organization, ...state.organizations];
      })
      .addCase(createOrganization.rejected, (state) => {
        state.crudLoading = false;
      })
      .addCase(getOrganizations.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOrganizations.fulfilled, (state, action) => {
        const organizations = action.payload;
        state.isLoading = false;
        state.organizations = organizations;
      })
      .addCase(getOrganizations.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateOrganization.pending, (state) => {
        state.crudLoading = true;
        state.error = null;
      })
      .addCase(updateOrganization.fulfilled, (state, action) => {
        const organization = action.payload;
        state.crudLoading = false;
        const findIndex = state.organizations.findIndex(
          (val) => val.extId === organization.extId
        );
        state.organizations[findIndex] = organization;
      })
      .addCase(updateOrganization.rejected, (state) => {
        state.crudLoading = false;
      })
      .addCase(deleteOrganization.pending, (state) => {
        state.crudLoading = true;
        state.error = null;
      })
      .addCase(deleteOrganization.fulfilled, (state, action) => {
        const organization = action.payload;
        state.organizations = state.organizations.filter(
          (val) => val.extId !== organization.extId
        );
        state.crudLoading = false;
      })
      .addCase(deleteOrganization.rejected, (state) => {
        state.crudLoading = false;
      })
      .addCase(joinCompanies.pending, (state) => {
        state.crudLoading = true;
        state.error = null;
      })
      .addCase(joinCompanies.fulfilled, (state, action) => {
        const organization = action.payload;
        state.crudLoading = false;
        const findIndex = state.organizations.findIndex(
          (val) => val.extId === organization.extId
        );
        state.organizations[findIndex] = organization;
      })
      .addCase(joinCompanies.rejected, (state) => {
        state.crudLoading = false;
      });
  },
});

export default slice;
