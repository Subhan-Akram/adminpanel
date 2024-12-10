import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "../themeReducer";
import { LoginReducer } from "features/login";
import { HomeReducer } from "features/home";
import { alertSlice } from "../slice";
import { ModelsReducer } from "features/models";
import { UserReducer } from "../features/users";
import { CompanyReducer } from "../features/companies";
import { OrganizationReducer } from "../features/organizations";
const store = configureStore({
  reducer: {
    organizations: OrganizationReducer,
    companies: CompanyReducer,
    auth: LoginReducer,
    users: UserReducer,
    theme: ThemeReducer,
    home: HomeReducer,
    alert: alertSlice,
    models: ModelsReducer,
  },
});

export default store;
