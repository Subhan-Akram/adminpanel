import { useEffect } from "react";
import { SullyTypography } from "../../../../components";
import ModelTable from "../ModelTable";
import { ModelWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getAllModels } from "../../services";

function Models() {
  const dispatch = useDispatch();
  const { models } = useSelector((state) => state.models);
  useEffect(() => {
    if (!models.length) {
      dispatch(getAllModels({ dispatch }));
    }
  }, []);
  return (
    <ModelWrapper>
      <ModelTable />
    </ModelWrapper>
  );
}

export default Models;
