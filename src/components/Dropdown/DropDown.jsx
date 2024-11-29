import * as React from "react";
import Fade from "@mui/material/Fade";
import OutlinedButton from "components/OutlinedButton";
import { DotIcon } from "sullyIcons";
import { DropdownWrapper, StyledMenu, StyledMenuItem } from "./style";
import PropTypes from "prop-types";

export default function DropDown({
  menuItems = [],
  icon = <DotIcon />,
  className,
  width,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <DropdownWrapper className={className}>
      <OutlinedButton
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="dot_icon_option"
        variant="contained"
      >
        {icon}
      </OutlinedButton>
      <StyledMenu
        width={width}
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menuItems.map((item, index) => (
          <StyledMenuItem
            key={index}
            onClick={(e) => {
              item.onClick(e);
              handleClose();
            }}
          >
            {item.icon} {item.label}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </DropdownWrapper>
  );
}

DropDown.propTypes = {
  icon: PropTypes.node,
  menuItems: PropTypes.array,
  className: PropTypes.string,
  width: PropTypes.any,
};
