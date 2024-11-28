import { GridActionsCellItem } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DeleteOutline } from "@mui/icons-material";
import { Avatar, Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {
  Chip,
  DropDown,
  SullyTypography,
  TextButton,
} from "../../../../components";
import { TagsGroupStyle } from "globalStyles";
const columns = ({ handleView, setDeletePopover, handleAddOrganization }) => [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    alignItems: "center",
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
    width: 300,
    renderCell: ({ row }) => {
      return (
        <>
          <TagsGroupStyle>
            {[...row?.organizations].map(({ name }, index) => (
              <Chip classNameProps="more_chips" key={index} label={name} />
            ))}
          </TagsGroupStyle>
        </>
      );
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
              setDeletePopover({ element: e.currentTarget, value: row });
            },
          },
        ]}
      />
    ),
  },
];

export default columns;
