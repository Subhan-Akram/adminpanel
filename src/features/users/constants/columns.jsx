import { Avatar, Box, Chip } from "@mui/material";
import { TagsGroupStyle } from "globalStyles";
import { DropDown } from "../../../components";
import { DotIcon } from "sullyIcons";
import { userTableActions } from ".";

const columns = ({ onDropDownChange }) => [
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
          {row.fullName && (
            <Avatar
              src={row?.logoUrl}
              alt={row.fullName}
              className="user_avatar"
            />
          )}

          {row.fullName ? (
            <span className="full_name_span">{row.fullName}</span>
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
    flex: 1,
    textAlign: "center",
    renderCell: ({ row }) => {
      return (
        <TagsGroupStyle>
          {row?.teams?.length ? (
            row.teams.map(({ name }) => <Chip key={{ name }} label={name} />)
          ) : (
            <div className="empty_cell">-</div>
          )}
        </TagsGroupStyle>
      );
    },
  },

  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    flex: 1,
    cellClassName: "actions",
    renderCell: ({ row }) => (
      <DropDown
        className="medium"
        menuItems={userTableActions({ row, onDropDownChange })}
      >
        <DotIcon />
      </DropDown>
    ),
  },
];

export default columns;
