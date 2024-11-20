import {
  DashboardIcon,
  SettingIcon,
  IntegrationIcon,
  CodeIntegrateIcon,
} from "sullyIcons";

const sideBarOptions = [
  {
    title: "Home",
    path: "",
    Icon: DashboardIcon,
    active: true,
    activeTabValue: "",
  },
  {
    title: "Integtaion",
    path: "comparision/feature",
    Icon: IntegrationIcon,
    active: false,
    activeTabValue: "comparision",
  },
  {
    title: "Code",
    path: "integration",
    Icon: CodeIntegrateIcon,
    active: false,
    activeTabValue: "integration",
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
