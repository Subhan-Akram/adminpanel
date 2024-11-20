import { SullyTypography } from "components";
import { Link } from "react-router-dom";

const modelDescriptionBreadcrumb = (pathCollection, title) => {
  const breadcrumbPaths = pathCollection.map(({ label, path }) =>
    path ? (
      <Link key={`${label}-${path}`} underline="hover" to={path}>
        {label}
      </Link>
    ) : (
      <SullyTypography key={label} color="text.primary">
        {label}
      </SullyTypography>
    ),
  );

  return [
    ...breadcrumbPaths,
    <SullyTypography key="3" color="text.primary">
      {title}
    </SullyTypography>,
  ];
};

export default modelDescriptionBreadcrumb;
