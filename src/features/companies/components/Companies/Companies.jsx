import { useEffect } from "react";
import CompaniesTable from "../CompaniesTable";
import { CompaniesWrapper } from "./style";
import { useDispatch } from "react-redux";
import { getCompanies } from "../../services";

function Comapnies() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanies({ dispatch }));
  }, [dispatch]);
  return (
    <CompaniesWrapper>
      <h1>companies</h1>
      <CompaniesTable />
    </CompaniesWrapper>
  );
}

export default Comapnies;
