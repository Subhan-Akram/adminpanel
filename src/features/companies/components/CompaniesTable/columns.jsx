import { Box } from "@mui/material";

import { DotIcon } from "sullyIcons";
import { Chip, DropDown } from "components";
import { TagsGroupStyle } from "globalStyles";
import { companyTableActions } from "features/companies/constants";
const columns = ({ handleDrawer, setDeleteCompany }) => [
  {
    field: "name",
    headerName: "Name",
    width: 200,
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
    width: 350,
    renderCell: ({ row }) => {
      return (
        <>
          <TagsGroupStyle>
            {row?.organizations.map(({ name }, index) => (
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
        className="medium"
        menuItems={companyTableActions({ row, handleDrawer, setDeleteCompany })}
      >
        <DotIcon />
      </DropDown>
    ),
  },
];

export default columns;
