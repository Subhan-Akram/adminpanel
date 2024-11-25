import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import {
  DashboardIcon,
  SettingIcon,
  IntegrationIcon,
  CodeIntegrateIcon,
} from "sullyIcons";
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
    title: "Organizations",
    path: "organizations",
    Icon: CorporateFareIcon,
    active: false,
    activeTabValue: "organizations",
  },
  {
    title: "Settings",
    path: "settings",
    Icon: SettingIcon,
    active: false,
    activeTabValue: "settings",
  },
];

export default sideBarOptions;
