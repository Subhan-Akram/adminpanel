/* eslint-disable no-debugger */
import { SullyTypography } from "components";
import { labelLookup } from "constants";
import { Link, useLocation } from "react-router-dom";

const GetBreadcrumb = () => {
  let lastPaths = ["Model Description", "Comparision", "Try Prompt"];
  const getLabelAndPaths = (pathname) => {
    const splitPaths = [];
    const labelAndPaths = [];
    pathname
      .slice(1)
      .split("/")
      .forEach((val) => {
        splitPaths.push(val);
        const path =
          val === "home"
            ? "/"
            : val === "comparision"
              ? `/${splitPaths.join("/")}/feature`
              : `/${splitPaths.join("/")}`;
        const pathLabel = { label: labelLookup[val], path } || {
          label: "",
          path: "",
        };
        labelAndPaths.push(pathLabel);
      });
    return labelAndPaths;
  };
  const { pathname } = useLocation();
  const labelAndPaths = getLabelAndPaths(pathname);
  const breadcrumbPaths = [];
  if (
    labelAndPaths.some((val) => val.label === "Model Description") ||
    labelAndPaths.some((val) => val.label === "Integrations") ||
    labelAndPaths.some((val) => val.label === "Try Prompt")
  ) {
    lastPaths = lastPaths.filter((path) => path !== "Comparision");
  }
  labelAndPaths.forEach(({ label, path }, index) => {
    if (!label) return;
    const isLast =
      index === labelAndPaths.length - 1 || lastPaths.includes(label);
    if (isLast) {
      breadcrumbPaths.push(
        <SullyTypography key={label} color="text.primary">
          {label}
        </SullyTypography>,
      );
    } else {
      breadcrumbPaths.push(
        <Link key={label} to={path}>
          {label}
        </Link>,
      );
    }
  });

  return breadcrumbPaths.length > 1 ? breadcrumbPaths : [];
};

export default GetBreadcrumb;
