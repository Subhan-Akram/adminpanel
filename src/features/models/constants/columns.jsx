import React from "react";
import { Box } from "@mui/material";
import { DropDown, LogoFrame } from "components";
import { modelTableActions } from "features/models/constants";
import { DotIcon } from "sullyIcons";
const columns = ({ onDropDownChange }) => {
  return [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
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
      flex: 1,
    },
    {
      field: "rating",
      headerName: "Rating",
      flex: 1,
    },

    {
      field: "ssbxCode",
      headerName: "Ssbx Code",
      sortable: false,
      flex: 1,
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      flex: 1,
      cellClassName: "actions",
      renderCell: ({ row }) => (
        <DropDown menuItems={modelTableActions({ row, onDropDownChange })}>
          <DotIcon />
        </DropDown>
      ),
    },
  ];
};

export default columns;
