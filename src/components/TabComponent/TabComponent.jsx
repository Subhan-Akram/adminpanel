import { TabWrapper } from "./style";
import { Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const TabComponent = ({ tabs, currentTab, handleChange }) => {
  return (
    <TabWrapper>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {tabs.map(({ title, activeTabValue }) => (
          <Tab key={title} label={title} value={activeTabValue} />
        ))}
      </Tabs>
      <Outlet />
    </TabWrapper>
  );
};
TabComponent.propTypes = {
  tabs: PropTypes.array,
  currentTab: PropTypes.string,
  handleChange: PropTypes.func,
  childern: PropTypes.node,
};
export default TabComponent;
