import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {
  ComparisonPage,
  ErrorPage,
  HomePage,
  IntegrationPage,
  LoginPage,
  ModelsPage,
  SettingPage,
} from "./pages";
import {
  FeatureComparision,
  PromptComparison,
  CostComparision,
} from "features/compare";
import { Alert } from "components";
import { ModelDescription } from "features/models";
import { TryPrompt } from "features/compare";

const routes = [
  { path: "/", element: <HomePage />, index: true },
  { path: "/models", element: <ModelsPage /> },
  { path: "/home/models", element: <ModelsPage /> },
  { path: "/home/models/try-prompt/:extId", element: <TryPrompt /> },
  {
    path: "/home/models/comparision/try-prompt/:extId",
    element: <TryPrompt />,
  },
  { path: "/comparision/try-prompt/:extId", element: <TryPrompt /> },

  {
    path: "/home/models/comparision/integration",
    element: <IntegrationPage />,
  },
  {
    path: "/home/models/integration",
    element: <IntegrationPage />,
  },
  {
    path: "/home/models/comparision/model-description/:extId",
    element: <ModelDescription />,
  },
  {
    path: "/home/models/model-description/:extId",
    element: <ModelDescription />,
  },
  {
    path: "/home/models/comparision/*",
    element: <ComparisonPage />,
    children: [
      { path: "feature", element: <FeatureComparision /> },
      { path: "prompt", element: <PromptComparison /> },
      { path: "cost", element: <CostComparision /> },
    ],
  },
  { path: "/settings", element: <SettingPage /> },
  {
    path: "/comparision/*",
    element: <ComparisonPage />,
    children: [
      { path: "", element: <Navigate to="feature" replace /> },
      { path: "feature", element: <FeatureComparision /> },
      { path: "prompt", element: <PromptComparison /> },
      { path: "cost", element: <CostComparision /> },
    ],
  },
  {
    path: "/comparision/model-description/:extId",
    element: <ModelDescription />,
  },
  { path: "/comparision/integration", element: <IntegrationPage /> },
  { path: "/integration", element: <IntegrationPage /> },

  { path: "/model-description/:extId", element: <ModelDescription /> },

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
