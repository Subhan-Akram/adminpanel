import React from "react";
import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import BusinessIcon from "@mui/icons-material/Business";
const organizationTableAction = ({ row, onDropDownChange }) => {
  return [
    {
      label: "Edit",
      icon: <EditIcon />,
      onClick: () => {
        onDropDownChange(row, "edit");
      },
    },
    {
      label: "Join Companies",
      icon: <BusinessIcon />,
      onClick: () => {
        onDropDownChange(row, "joinCompanies");
      },
    },
    {
      label: "Delete",
      icon: <DeleteOutline />,
      onClick: () => {
        onDropDownChange(row, "delete");
      },
    },
  ];
};

export default organizationTableAction;
