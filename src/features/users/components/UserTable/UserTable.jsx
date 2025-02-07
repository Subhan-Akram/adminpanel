import { UserTableWrapper } from "./style";
import Table from "components/Table";
import columns from "../../constants/columns";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Banner, OutlinedButton, TableToolbar } from "components";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export default function UsersTable() {
  const { users, isLoading } = useSelector((state) => state.users);
  const Toolbar = () => (
    <TableToolbar placeholder={"Search Users"} title="All Users" />
  );

  return (
    <>
      <UserTableWrapper>
        <Banner text={"Company Users"}>
          <Box className="btn_group">
            <OutlinedButton startIcon={<FileDownloadOutlinedIcon />}>
              Export CSV
            </OutlinedButton>
          </Box>
        </Banner>
        <Table
          CustomToolbar={Toolbar}
          showTableSearch={true}
          isLoading={isLoading}
          rows={users}
          columns={columns}
        />
      </UserTableWrapper>
    </>
  );
}
