import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {
  ErrorPage,
  HomePage,
  LoginPage,
  ModelsPage,
  OrganizationPage,
  UserPage,
  CompanyPage,
} from "./pages";
import { FeatureComparision, PromptComparison } from "features/compare";
import { Alert } from "components";
import Layout from "./layouts/Layout";
import OrganzationPage from "./pages/OrganizationPage";
import Layout2 from "./layouts/Layout2";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UserPage /> },
  { path: "/models", element: <ModelsPage /> },
  { path: "/companies", element: <CompanyPage /> },
  // {
  //   path: "/organizations/*",
  //   element: <OrganizationPage />,
  //   children: [
  //     {
  //       path: ":organizationId/organization-settings",
  //       element: <FeatureComparision />,
  //     },
  //     {
  //       path: ":organizationId/companies/:companyId",
  //       element: <PromptComparison />,
  //     },
  //   ],
  // },

  { path: "*", element: <ErrorPage /> },
];

function App() {
  return (
    <>
      <Alert />
      <Router>
        <Routes>
          <Route path={"/login"} element={<LoginPage />} />
          <Route
            path={"/organizations"}
            element={
              <Layout2>
                <OrganzationPage />
              </Layout2>
            }
          />
          <Route path="/" element={<PrivateRoute />}>
            {routes.map(({ path, element, index, children }) => (
              <Route key={path} path={path} element={element} index={index}>
                {children &&
                  children.map(({ path: childPath, element: childElement }) => (
                    <Route
                      key={childPath}
                      path={childPath}
                      element={childElement}
                    />
                  ))}
              </Route>
            ))}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
