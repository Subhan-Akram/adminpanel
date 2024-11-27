import { GridActionsCellItem } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DeleteOutline } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import { Chip, SullyTypography } from "../../../../components";
import { TagsGroupStyle } from "globalStyles";
import EditIcon from "@mui/icons-material/Edit";
const columns = ({ handleView, setDeletePopover }) => [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <span style={{ fontWeight: 500, width: "120px" }}>
            {params.row.name}
          </span>
        </Box>
      );
    },
  },
  {
    field: "subscriber",
    headerName: "Subscriber",
    width: 220,
    valueGetter: (subscriber) => {
      return subscriber ? "Yes" : "No";
    },
  },
  {
    field: "enabled",
    headerName: "Status",
    width: 100,
    valueGetter: (enable) => {
      return enable ? "Yes" : "No";
    },
  },

  {
    field: "organizations",
    headerName: "Organizations",
    sortable: false,
    width: 200,
    renderCell: ({ row }) => {
      return (
        <TagsGroupStyle>
          {" "}
          {row?.organizations?.map(({ name }) => (
            <Chip classNameProps="more_chips" key={{ name }} label={name} />
          ))}
        </TagsGroupStyle>
      );
    },
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
        icon={<EditIcon sx={{ color: "var(--icon-primary)" }} />}
        label="View Details"
        onClick={() => handleView(row)}
      />,
      <GridActionsCellItem
        key={"2"}
        icon={<DeleteOutline sx={{ color: "var(--icon-primary)" }} />}
        label="View Details"
        onClick={(e) => {
          setDeletePopover({ element: e.currentTarget, value: row });
        }}
      />,
    ],
  },
];

export default columns;
