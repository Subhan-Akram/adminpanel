import { useEffect } from "react";
import ModelTable from "../ModelTable";
import { ModelWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getAllModels } from "../../services";

function Models() {
  return (
    <ModelWrapper className="main_content">
      <ModelTable />
    </ModelWrapper>
  );
}

export default Models;
