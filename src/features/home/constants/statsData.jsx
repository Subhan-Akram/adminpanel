import { CreditCard } from "@mui/icons-material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import ApartmentIcon from "@mui/icons-material/Apartment";

const statsData = [
  {
    title: "Users",
    stats: "2,240",
    link: "/users",
    icon: <PeopleAltIcon />,
  },
  {
    title: "LLM's Models",
    stats: "1,240",
    link: "/models",
    icon: <CreditCard />,
  },
  {
    title: "Companies",
    stats: "5,240",
    link: "/companies",
    icon: <ApartmentIcon />,
  },
  {
    title: "Organization",
    stats: "3,240",
    link: "/organizations",
    icon: <CorporateFareIcon />,
  },
  {
    title: "Credits",
    stats: "1,540",
    link: "/",
    icon: <CreditCard />,
  },
];

export default statsData;
