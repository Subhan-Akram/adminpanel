import { Avatar, Box, Chip } from "@mui/material";
import { TagsGroupStyle } from "globalStyles";
import { DropDown, MoreItemsTooltip } from "../../../components";
import { DotIcon } from "sullyIcons";
import { userTableActions } from ".";

const columns = [
  {
    field: "fullName",
    headerName: "Full Name",
    flex: 1,
    renderCell: ({ row }) => {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {row.fullName ? (
            <>
              <Avatar
                src={row?.logoUrl}
                alt={row.fullName}
                className="user_avatar"
              />
              <span className="full_name_span">{row.fullName}</span>
            </>
          ) : (
            <div className="empty_cell">-</div>
          )}
        </Box>
      );
    },
  },

  {
    field: "email",
    headerName: "Email",
    width: 350,
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
    field: "company",
    headerName: "Company",
    sortable: false,
    flex: 1,
    valueGetter: (row) => {
      return row.name;
    },
  },
  {
    field: "teams",
    headerName: "Teams",
    sortable: false,
    width: 250,
    textAlign: "center",
    renderCell: ({ row }) => {
      const { teams } = row;
      return <MoreItemsTooltip items={teams} showItemCount={2} />;
    },
  },
];

export default columns;
