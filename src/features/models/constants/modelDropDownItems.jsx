import { ViewIcon, IntegrationDropdownIcon } from "sullyIcons";

const modelDropDownItems = (isIntegrated, onClick) => {
  return isIntegrated
    ? [
        {
          label: "View Integartion",
          icon: <ViewIcon />,
          onClick,
        },
      ]
    : [
        {
          label: "Integrate",
          icon: <IntegrationDropdownIcon />,
          onClick,
        },
      ];
};

export default modelDropDownItems;
