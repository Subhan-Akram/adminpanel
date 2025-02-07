import { Chip, DropDown, MoreItemsTooltip } from "components";
import { TagsGroupStyle } from "globalStyles";
import { DotIcon } from "sullyIcons";
import { organizationTableAction } from "features/organizations/constants";

const columns = ({ onDropDownChange }) => [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    alignItems: "center",
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
    field: "companies",
    headerName: "Companies",
    sortable: false,
    width: 280,
    renderCell: ({ row }) => {
      const { companies } = row;
      return <MoreItemsTooltip items={companies} showItemCount={2} />;
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
        menuItems={organizationTableAction({
          row,
          onDropDownChange,
        })}
      >
        <DotIcon />
      </DropDown>
    ),
  },
];

export default columns;
