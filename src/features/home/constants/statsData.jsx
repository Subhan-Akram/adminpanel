import { CreditCard } from "@mui/icons-material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import ApartmentIcon from "@mui/icons-material/Apartment";

const statsData = [
  {
    title: "Users",
    stats: "-",
    link: "/users",
    icon: <PeopleAltIcon />,
  },
  {
    title: "LLM's Models",
    stats: "-",
    link: "/models",
    icon: <CreditCard />,
  },
  {
    title: "Companies",
    stats: "-",
    link: "/companies",
    icon: <ApartmentIcon />,
  },
  {
    title: "Organization",
    stats: "-",
    link: "/organizations",
    icon: <CorporateFareIcon />,
  },
  {
    title: "Credits",
    stats: "-",
    link: "/",
    icon: <CreditCard />,
  },
];

export default statsData;
