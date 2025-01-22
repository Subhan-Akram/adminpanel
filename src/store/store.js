import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "../themeReducer";
import { LoginReducer } from "features/login";
import { alertSlice } from "../slice";
import { ModelsReducer } from "features/models";
import { OrganizationReducer } from "features/organizations";
import { CompanyReducer } from "features/companies";
import { UserReducer } from "features/users";
const store = configureStore({
  reducer: {
    auth: LoginReducer,
    theme: ThemeReducer,
    alert: alertSlice,
    models: ModelsReducer,
    organizations: OrganizationReducer,
    companies: CompanyReducer,
    users: UserReducer,
  },
});

export default store;
