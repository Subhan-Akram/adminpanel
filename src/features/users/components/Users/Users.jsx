import { useEffect } from "react";
import UsersTable from "../../UserTable";
import { UserWrapper } from "./style";
import { useDispatch } from "react-redux";
import { getUsers } from "../../services";

function Users() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers({ dispatch }));
  }, [dispatch]);
  return (
    <UserWrapper>
      <UsersTable />
    </UserWrapper>
  );
}

export default Users;
