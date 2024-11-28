/* eslint-disable react/prop-types */
import { Delete, MoreVert, Visibility } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

function ModelTableAction({ row, setDeletePopover, handleView }) {
  const [anchorEl, setAnchorEl] = useState(null);
  // State to handle menu open/close

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more options"
        aria-controls={`menu-${row.id}`}
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id={`menu-${row.id}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            handleView(row);
          }}
        >
          <Visibility sx={{ marginRight: 1 }} />
          View
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            handleMenuClose();
            setDeletePopover({ element: e.currentTarget, model: row });
          }}
        >
          <Delete sx={{ marginRight: 1 }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
}
export default ModelTableAction;
