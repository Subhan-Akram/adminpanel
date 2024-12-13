import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../services";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("user")) || { name: "" },
    access_token: sessionStorage.getItem("access_token") || null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      sessionStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    },
    setToken: (state, action) => {
      sessionStorage.setItem("access_token", action.payload);
      state.access_token = action.payload;
    },
    logout(state) {
      state.user = null;
      state.access_token = null;
      sessionStorage.removeItem("access_token");
      sessionStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.access_token = action.payload.access_token;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default slice;
