import { GridActionsCellItem } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DeleteOutline } from "@mui/icons-material";

const columns = ({ handleView, setDeletePopover }) => [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 180,
  },
  {
    field: "description",
    headerName: "Description",
    width: 220,
  },
  {
    field: "rating",
    headerName: "Rating",
    type: "number",
  },
  {
    field: "modelCard",
    headerName: "ModelCard",
    sortable: false,
    width: 180,
  },

  {
    field: "ssbxCode",
    headerName: "Ssbx Code",
    sortable: false,
    width: 180,
  },
  {
    field: "license",
    headerName: "License",
    sortable: false,
    width: 180,
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
          setDeletePopover({ element: e.currentTarget, value: row });
        }}
      />,
    ],
  },
];

export default columns;
