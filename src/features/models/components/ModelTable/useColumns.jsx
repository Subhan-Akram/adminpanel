/* eslint-disable no-unused-vars */
// import { GridActionsCellItem } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
// import { Avatar, Box } from "@mui/material";
// import { LogoFrame, SullyTypography } from "../../../../components";

// const columns = ({ handleView, setDeletePopover }) => [
//   // { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "name",
//     headerName: "Name",
//     width: 200,
//     renderCell: (params) => {
//       return (
//         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//           <LogoFrame
//             imgLink={params.row.logoUrl}
//             className={"logo_frame_small"}
//           ></LogoFrame>
//           {params.row.name}
//         </Box>
//       );
//     },
//   },
//   {
//     field: "description",
//     headerName: "Description",
//     width: 220,
//   },
//   {
//     field: "rating",
//     headerName: "Rating",
//     type: "number",
//     width: 100,
//     headerAlign: "left",
//     cellClassName: "custom-align-left",
//   },
//   {
//     field: "modelCard",
//     headerName: "Model Card",
//     sortable: false,
//     width: 180,
//   },

//   {
//     field: "ssbxCode",
//     headerName: "Ssbx Code",
//     sortable: false,
//     width: 200,
//   },
//   {
//     field: "license",
//     headerName: "License",
//     sortable: false,
//     width: 180,
//   },
//   {
//     field: "actions",
//     type: "actions",
//     headerName: "Actions",
//     width: 100,
//     cellClassName: "actions",
//     getActions: ({ row }) => [
//       <GridActionsCellItem
//         key={"1"}
//         icon={<VisibilityIcon sx={{ color: "var(--icon-primary)" }} />}
//         label="View Details"
//         onClick={() => handleView(row)}
//       />,
//       <GridActionsCellItem
//         key={"2"}
//         icon={<DeleteOutline sx={{ color: "var(--red)" }} />}
//         label="View Details"
//         onClick={(e) => {
//           setDeletePopover({ element: e.currentTarget, model: row });
//         }}
//       />,
//     ],
//   },
// ];

// export default columns;
import React, { useState } from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { Visibility, Delete, MoreVert } from "@mui/icons-material";
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { DropDown, LogoFrame } from "../../../../components";
import ModelTableAction from "./ModelTableAction";

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
