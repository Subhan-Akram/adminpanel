import { SullyTypography } from "components";
import { Link } from "react-router-dom";

const modelSearchBreadcrumb = [
  <Link underline="hover" key="1" color="inherit" href="/" to="/">
    Home
  </Link>,

  <SullyTypography key="3" color="text.primary">
    Search Result
  </SullyTypography>,
];

export default modelSearchBreadcrumb;
