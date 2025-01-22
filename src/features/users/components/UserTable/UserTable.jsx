import { UserTableWrapper } from "./style";
import Table from "components/Table";
import columns from "../../constants/columns";
import { useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import {
  Banner,
  ConfirmationModal,
  OutlinedButton,
  SullyTypography,
  TableToolbar,
} from "components";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../services";
import UserCreate from "../UserCreate";
import { Box } from "@mui/material";
import { UserEdit } from "..";

export default function UsersTable() {
  const { users, isLoading } = useSelector((state) => state.users);
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);
  const [isUserDelete, setIsUserDelete] = useState(false);
  const { fullName, username, extId } = user;
  const Toolbar = () => (
    <TableToolbar placeholder={"Search Users"} title="All Users" />
  );
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser({ extId }))
      .unwrap()
      .then(() => {
        setIsUserDelete(false);
      });
  };
  const onDropDownChange = (row, type) => {
    setUser(row);
    if (type === "edit") setEdit(true);
    if (type === "delete") setIsUserDelete(true);
  };

  return (
    <>
      <ConfirmationModal
        isConfirmModalOpen={isUserDelete}
        handleSubmit={handleDelete}
        setIsConfirmModalOpen={setIsUserDelete}
        title={`Delete - ${fullName || username || ""}`}
        description={
          <SullyTypography classNameProps="confirm_modal_text">
            Are you sure you want to delete{" "}
            <SullyTypography variant="span" classNameProps="model_name">
              {fullName || username || ""}
            </SullyTypography>{" "}
            from Company ?
          </SullyTypography>
        }
        isLoading={isLoading}
        confirmBtnText="Delete"
      />
      <UserEdit user={user} edit={edit} setEdit={setEdit} />

      <UserTableWrapper>
        <Banner text={"Company Users"}>
          <Box className="btn_group">
            <OutlinedButton startIcon={<FileDownloadOutlinedIcon />}>
              Export CSV
            </OutlinedButton>
            <UserCreate />
          </Box>
        </Banner>
        <Table
          CustomToolbar={Toolbar}
          showTableSearch={true}
          isLoading={isLoading}
          rows={users}
          columns={columns({ onDropDownChange })}
        />
      </UserTableWrapper>
    </>
  );
}
