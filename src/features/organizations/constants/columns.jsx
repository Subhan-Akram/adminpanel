import { Chip, DropDown } from "components";
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
    flex: 1,
    renderCell: ({ row }) => {
      return (
        <>
          <TagsGroupStyle>
            {row.companies.length ? (
              row.companies.map(({ name }, index) => (
                <Chip classNameProps="more_chips" key={index} label={name} />
              ))
            ) : (
              <div className="empty_cell">-</div>
            )}
          </TagsGroupStyle>
        </>
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
