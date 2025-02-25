import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, getUsers, updateUser } from "../services";
import getUserByEmail from "../services/getUserByEmail";

const initialState = {
  users: [],
  isLoading: false,
  error: "",
};

export const slice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        const user = action.payload;
        state.isLoading = false;
        state.users = [user, ...state.users];
      })
      .addCase(createUser.rejected, (state) => {
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
