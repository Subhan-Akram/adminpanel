import { GridActionsCellItem } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DeleteOutline } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";

const columns = ({ handleView, setDeletePopover }) => [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "username",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            src={params.row.logoUrl}
            alt={params.row.name}
            sx={{ width: 30, height: 30 }}
          />

          <span style={{ fontWeight: 500, width: "120px" }}>
            {params.row.name}
          </span>
        </Box>
      );
    },
  },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 220,
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: false,
    width: 180,
  },

  {
    field: "im",
    headerName: "Role",
    sortable: false,
    width: 200,
  },

  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 100,
    cellClassName: "actions",
    getActions: ({ row }) => [
      <GridActionsCellItem
        key={"1"}
        icon={<VisibilityIcon sx={{ color: "var(--icon-primary)" }} />}
        label="View Details"
        onClick={() => handleView(row)}
      />,
      <GridActionsCellItem
        key={"2"}
        icon={<DeleteOutline sx={{ color: "var(--icon-primary)" }} />}
        label="View Details"
        onClick={(e) => {
          setDeletePopover({ element: e.currentTarget, model: row });
        }}
      />,
    ],
  },
];

export default columns;
