/* eslint-disable no-unused-vars */

import VisibilityIcon from "@mui/icons-material/Visibility";
import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { Box } from "@mui/material";
import { DropDown, LogoFrame } from "../../../../components";

const useColumns = ({ handleView, setDeletePopover, handleEdit }) => {
  return [
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
      width: 220,
    },
    {
      field: "ssbxCode",
      headerName: "Ssbx Code",
      sortable: false,
      width: 220,
    },
    {
      field: "license",
      headerName: "License",
      sortable: false,
      width: 120,
      valueGetter: (params) => {
        return params ?? "None";
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
              label: "View Details",
              icon: <VisibilityIcon />,
              onClick: () => {
                handleView(row);
              },
            },
            {
              label: "Edit",
              icon: <EditIcon />,
              onClick: () => {
                handleEdit(row);
              },
            },
            {
              label: "Delete",
              icon: <DeleteOutline />,
              onClick: (e) => {
                setDeletePopover({ element: e.currentTarget, model: row });
              },
            },
          ]}
        />
      ),
    },
  ];
};

export default useColumns;
