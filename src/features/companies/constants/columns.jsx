import { Box, Tooltip } from "@mui/material";

import { DotIcon } from "sullyIcons";
import { Chip, DropDown, MoreItemsTooltip } from "components";
import { TagsGroupStyle } from "globalStyles";
import { companyTableActions } from "features/companies/constants";
const columns = ({ handleChange }) => [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
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
    flex: 1,
    valueGetter: (subscriber) => {
      return subscriber ? "Yes" : "No";
    },
  },
  {
    field: "enabled",
    headerName: "Status",
    flex: 1,
    valueGetter: (enable) => {
      return enable ? "Enabled" : "Disabled";
    },
  },

  {
    field: "organizations",
    headerName: "Organizations",
    sortable: false,
    width: 360,
    renderCell: ({ row }) => {
      const { organizations } = row;
      return <MoreItemsTooltip items={organizations} showItemCount={2} />;
    },
  },

  {
    field: "actions",
    type: "actions",
    flex: 1,
    headerName: "Actions",
    cellClassName: "actions",
    renderCell: ({ row }) => (
      <DropDown
        className="medium"
        menuItems={companyTableActions({ row, handleChange })}
      >
        <DotIcon />
      </DropDown>
    ),
  },
];

export default columns;
