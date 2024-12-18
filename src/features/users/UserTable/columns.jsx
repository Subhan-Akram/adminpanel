import { GridActionsCellItem } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Avatar, Box, Chip } from "@mui/material";
import { TagsGroupStyle } from "globalStyles";
import EditIcon from "@mui/icons-material/Edit";
import { DropDown } from "../../../components";
// import { Avatar, Box } from "@mui/material";

const columns = ({ handleView, setDeletePopover }) => [
  {
    field: "fullName",
    headerName: "Full Name",
    width: 220,
    renderCell: ({ row }) => {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {row.fullName && (
            <Avatar
              src={row?.logoUrl}
              alt={row.fullName}
              sx={{ width: 30, height: 30 }}
            />
          )}

          <span
            style={{
              fontWeight: 500,
              width: "120px",
              textAlign: "cneter",
              display: "flex",
              justifyContent: row.fullName ? "start" : "center",
            }}
          >
            {row.fullName || "-"}
          </span>
        </Box>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
  },
  {
    field: "company",
    headerName: "company",
    sortable: false,
    width: 180,
    valueGetter: (row) => {
      return row.name;
    },
  },
  {
    field: "teams",
    headerName: "Teams",
    sortable: false,
    width: 200,
    textAlign: "center",
    renderCell: ({ row }) => {
      return (
        <TagsGroupStyle
          sx={{
            display: "flex",
            marginLeft: row?.teams?.length ? "0" : "20px",
            // height: "95%",
            alignItems: "center",
          }}
        >
          {" "}
          {row?.teams?.length
            ? row?.teams?.map(({ name }) => (
                <Chip classNameProps="home_chips" key={{ name }} label={name} />
              ))
            : "-"}
        </TagsGroupStyle>
      );
    },
  },
  {
    field: "roles",
    headerName: "Roles",
    sortable: false,
    width: 200,
    renderCell: ({ row }) => {
      return row?.roles?.length
        ? row.roles.map((role) => <Chip key={role} label={role} />)
        : "No Roles";
    },
  },

  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 100,
    cellClassName: "actions",
    renderCell: ({ row }) => (
      <DropDown
        width={"170px"}
        className="medium"
        menuItems={[
          {
            label: "Edit",
            icon: <EditIcon />,
            onClick: () => {
              handleView(row);
            },
          },

          {
            label: "Delete",
            icon: <DeleteOutline />,
            onClick: (e) => {
              setDeletePopover({ isConfirmModalOpen: true, model: row });
            },
          },
        ]}
      />
    ),
  },
];

export default columns;
