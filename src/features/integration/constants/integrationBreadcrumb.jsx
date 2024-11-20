import { SullyTypography } from "components";
import { Link } from "react-router-dom";
const integrationBreadCrumb = (pathCollection) => {
  const breadcrumbPaths = pathCollection.map(({ label, path }) => {
    if (path) {
      return (
        <Link key={label} underline="hover" to={path} href={path}>
          {label}
        </Link>
      );
    } else {
      return (
        <SullyTypography key="3" color="text.primary">
          {label}
        </SullyTypography>
      );
    }
  });
  return [
    ...breadcrumbPaths,
    <SullyTypography key="3" color="text.primary">
      Integrations
    </SullyTypography>,
  ];
};

export default integrationBreadCrumb;
