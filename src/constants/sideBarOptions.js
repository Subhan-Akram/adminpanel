import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { DashboardIcon, IntegrationIcon } from "sullyIcons";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
const sideBarOptions = [
  {
    title: "Home",
    path: "",
    Icon: DashboardIcon,
    active: true,
    activeTabValue: "",
  },
  {
    title: "Models",
    path: "models",
    Icon: IntegrationIcon,
    active: false,
    activeTabValue: "models",
  },
  {
    title: "Users",
    path: "users",
    Icon: PeopleAltIcon,
    active: false,
    activeTabValue: "users",
  },
  {
    title: "Companies",
    path: "companies",
    Icon: ApartmentIcon,
    active: false,
    activeTabValue: "companies",
  },
  {
    title: "Organizations",
    path: "organizations",
    Icon: CorporateFareIcon,
    active: false,
    activeTabValue: "organizations",
  },
];

export default sideBarOptions;
