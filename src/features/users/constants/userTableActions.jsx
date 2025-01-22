import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

const userTableActions = ({ row, onDropDownChange }) => {
  return [
    {
      label: "Edit",
      icon: <EditIcon />,
      onClick: () => {
        onDropDownChange(row, "edit");
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

export default userTableActions;
