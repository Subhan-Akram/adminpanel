import { SullyTypography } from "../../../../components";
import ModelTable from "../ModelTable";
import { ModelWrapper } from "./style";

function Models() {
  return (
    <ModelWrapper>
      <SullyTypography classNameProps="page_title">Models</SullyTypography>
      <ModelTable />
    </ModelWrapper>
  );
}

export default Models;
