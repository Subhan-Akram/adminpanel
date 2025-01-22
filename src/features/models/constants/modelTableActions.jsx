import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

const modelTableActions = ({ row, onDropDownChange }) => {
  return [
    {
      label: "View Details",
      icon: <VisibilityIcon />,
      onClick: () => {
        onDropDownChange({ row, type: "view" });
      },
    },
    {
      label: "Edit",
      icon: <EditIcon />,
      onClick: () => {
        onDropDownChange({ row, type: "edit" });
      },
    },
    {
      label: "Delete",
      icon: <DeleteOutline />,
      onClick: () => {
        onDropDownChange({ row, type: "delete" });
      },
    },
  ];
};

export default modelTableActions;
