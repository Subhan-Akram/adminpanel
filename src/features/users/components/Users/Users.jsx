import UsersTable from "../UserTable";
import { UserWrapper } from "./style";
import { useDispatch } from "react-redux";
import { getUsers } from "../../services";
import { useEffect } from "react";

function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers({ dispatch }));
  }, [dispatch]);
  return (
    <UserWrapper className="main_content">
      <UsersTable />
    </UserWrapper>
  );
}

export default Users;
