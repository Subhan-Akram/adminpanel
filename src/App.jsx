import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {
  ComparisonPage,
  ErrorPage,
  HomePage,
  LoginPage,
  ModelsPage,
  OrganizationPage,
} from "./pages";
import { FeatureComparision, PromptComparison } from "features/compare";
import { Alert } from "components";
import { TryPrompt } from "features/compare";

const routes = [
  { path: "/", element: <HomePage />, index: true },
  { path: "/models", element: <ModelsPage /> },
  { path: "/home/models", element: <ModelsPage /> },
  { path: "/home/models/try-prompt/:extId", element: <TryPrompt /> },
  {
    path: "/organizations/*",
    element: <OrganizationPage />,
    children: [
      {
        path: ":organizationId/organization-settings",
        element: <FeatureComparision />,
      },
      {
        path: ":organizationId/companies/:companyId",
        element: <PromptComparison />,
      },
    ],
  },

  { path: "*", element: <ErrorPage /> },
];

function App() {
  return (
    <>
      <Alert />
      <Router>
        <Routes>
          <Route path={"/login"} element={<LoginPage />} />
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
