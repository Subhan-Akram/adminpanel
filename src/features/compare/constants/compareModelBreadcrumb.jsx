import { SullyTypography } from "components";
import { Link } from "react-router-dom";

const compareModelBreadcrumb = (tags) => {
  return [
    <Link underline="hover" key="1" color="inherit" href="/" to="/">
      Home
    </Link>,

    <Link
      underline="hover"
      key="1"
      color="inherit"
      href={`/model-search?search=t${!!tags.length}`}
      to={`/model-search?search=${!!tags.length}`}
    >
      Search Result
    </Link>,
    <SullyTypography key="3" color="text.primary">
      Compare Model
    </SullyTypography>,
  ];
};

export default compareModelBreadcrumb;
