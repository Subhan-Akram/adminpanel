import { GridActionsCellItem } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DeleteOutline } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import { LogoFrame, SullyTypography } from "../../../../components";

const columns = ({ handleView, setDeletePopover }) => [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LogoFrame
            imgLink={params.row.logoUrl}
            className={"logo_frame_small"}
          ></LogoFrame>
          {params.row.name}
        </Box>
      );
    },
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
    width: 100,
    headerAlign: "left",
    cellClassName: "custom-align-left",
  },
  {
    field: "modelCard",
    headerName: "Model Card",
    sortable: false,
    width: 180,
  },

  {
    field: "ssbxCode",
    headerName: "Ssbx Code",
    sortable: false,
    width: 200,
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
          setDeletePopover({ element: e.currentTarget, model: row });
        }}
      />,
    ],
  },
];

export default columns;
