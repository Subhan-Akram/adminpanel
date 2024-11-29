/* eslint-disable no-unused-vars */

import VisibilityIcon from "@mui/icons-material/Visibility";
import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import { Avatar, Box } from "@mui/material";
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
      valueGetter: (params) => {
        return params ?? "-";
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
      //  ({ row }) => {
      //   // State to handle menu open/close

      //   const open = Boolean(anchorEl);

      //   const handleMenuOpen = (event) => {
      //     setAnchorEl(event.currentTarget);
      //   };

      //   const handleMenuClose = () => {
      //     setAnchorEl(null);
      //   };

      //   return (
      //     <>
      //       <IconButton
      //         aria-label="more options"
      //         aria-controls={`menu-${row.id}`}
      //         aria-haspopup="true"
      //         onClick={handleMenuOpen}
      //       >
      //         <MoreVert />
      //       </IconButton>
      //       <Menu
      //         id={`menu-${row.id}`}
      //         anchorEl={anchorEl}
      //         open={open}
      //         onClose={handleMenuClose}
      //       >
      //         <MenuItem
      //           onClick={() => {
      //             handleMenuClose();
      //             handleView(row);
      //           }}
      //         >
      //           <Visibility sx={{ marginRight: 1 }} />
      //           View
      //         </MenuItem>
      //         <MenuItem
      //           onClick={(e) => {
      //             handleMenuClose();
      //             setDeletePopover({ element: e.currentTarget, model: row });
      //           }}
      //         >
      //           <Delete sx={{ marginRight: 1 }} />
      //           Delete
      //         </MenuItem>
      //       </Menu>
      //     </>
      //   );
      // },
    },
  ];
};

export default useColumns;
