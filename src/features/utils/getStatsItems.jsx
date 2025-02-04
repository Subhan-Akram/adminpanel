import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CreditCard from "@mui/icons-material/CreditCard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import TableViewIcon from "@mui/icons-material/TableView";
import camelCaseToText from "./camelCaseToText";

const getStatsItems = (val) => {
  switch (val) {
    case "users":
      return { icon: <PeopleAltIcon />, link: "/users", title: "Users" };
    case "customModels":
      return {
        icon: <CreditCard />,
        link: "/models",
        title: "Custom Models",
      };
    case "models":
      return { icon: <CreditCard />, link: "/models", title: "Models" };
    case "companies":
      return {
        icon: <ApartmentIcon />,
        link: "/companies",
        title: "Companies",
      };
    case "organizations":
      return {
        icon: <CorporateFareIcon />,
        link: "/organizations",
        title: "Organizations",
      };
    case "modelSets":
      return {
        icon: <TableViewIcon />,
        link: "/",
        title: "Model Sets",
      };
    default:
      return { icon: <CreditCard />, link: "/", title: camelCaseToText(val) };
  }
};

export default getStatsItems;
