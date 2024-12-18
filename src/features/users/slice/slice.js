import { createSlice } from "@reduxjs/toolkit";
import { addUser, deleteUser, getUsers, updateUser } from "../services";
import getUserByEmail from "../services/getUserByEmail";

const initialState = {
  users: [
    {
      username: "fred@farkle.com",
      fullName: "Fred Farkle",
      email: "fred@farkle.com",
      extId: "f36807d0-a720-4b89-8e34-07df0bae14ce",
      enabled: true,
      company: {
        name: "Alerois Corp",
        extId: "66dd59be-1a92-4b6e-8361-1b97601327a8",
        enabled: true,
        subscriber: false,
        privateData: false,
      },
      teams: [
        {
          name: "Team ThisWay",
          extId: "70f095fe-84ed-4be3-bfc6-22807ff6480c",
          enabled: true,
          private: false,
        },
      ],
    },
    {
      username: "alex@alerois.com",
      email: "alex@alerois.com",
      extId: "73d18ab1-dfa0-47cf-8ac1-d889c53a0b74",
      enabled: true,
      company: {
        name: "Alerois Corp",
        extId: "66dd59be-1a92-4b6e-8361-1b97601327a8",
        enabled: true,
        subscriber: false,
        privateData: false,
      },
      teams: [
        {
          name: "Team ThisWay",
          extId: "70f095fe-84ed-4be3-bfc6-22807ff6480c",
          enabled: true,
          private: false,
        },
      ],
    },
    {
      username: "qa2+eatigoeatigo@thiswayglobal.com",
      email: "qa2+eatigoeatigo@thiswayglobal.com",
      extId: "ae747b9a-14c5-44f6-8a93-09f831d2bc6f",
      enabled: true,
      company: {
        name: "ThisWay Global",
        extId: "8fe3ab48-f98f-40cd-a610-28d8b56a9fbe",
        enabled: true,
        subscriber: false,
        privateData: false,
      },
      teams: [],
    },
  ],
  isLoading: false,
  error: "",
};

export const slice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        const user = action.payload;
        state.isLoading = false;
        state.users = [user, ...state.users];
      })
      .addCase(addUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        const users = action.payload;
        state.isLoading = false;
        state.users = users;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserByEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserByEmail.fulfilled, (state, action) => {
        const users = action.payload;
        state.isLoading = false;
        state.users = users.email ? [users] : [];
      })
      .addCase(getUserByEmail.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const user = action.payload;
        state.isLoading = false;
        const findModelIndex = state.users.findIndex(
          (val) => val.extId === user.extId
        );
        state.models[findModelIndex] = user;
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const user = action.payload;
        state.users = state.users.filter((val) => val.extId !== user.extId);
      })
      .addCase(deleteUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default slice;
