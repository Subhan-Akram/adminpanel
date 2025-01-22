import BusinessIcon from "@mui/icons-material/Business";
import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

const companyActions = ({ row, handleChange }) => {
  return [
    {
      label: "Edit",
      icon: <EditIcon />,
      onClick: () => {
        handleChange(row, "edit");
      },
    },
    {
      label: "Join Organization",
      icon: <BusinessIcon />,
      onClick: () => {
        handleChange(row, "joinOrganization");
      },
    },
    {
      label: "Delete",
      icon: <DeleteOutline />,
      onClick: (e) => {
        handleChange(row, "deleteCompany");
      },
    },
  ];
};
export default companyActions;
