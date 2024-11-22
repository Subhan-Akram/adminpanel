import { useEffect } from "react";
import { SullyTypography } from "../../../../components";
import ModelTable from "../ModelTable";
import { ModelWrapper } from "./style";
import { useDispatch } from "react-redux";
import { getAllModels } from "../../services";

function Models() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllModels({ dispatch }));
  }, []);
  return (
    <ModelWrapper>
      <ModelTable />
    </ModelWrapper>
  );
}

export default Models;
