import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
import React from "react";
import SullyTypography from "../SullyTypography";
import { Box } from "@mui/material";
import { TableToolbarWrapper } from "./style";

function TableToolbar({ title, placeholder }) {
  return (
    <TableToolbarWrapper>
      <SullyTypography classNameProps={"modaltitle1"}>{title}</SullyTypography>
      <Box className="content_box">
        <GridToolbarQuickFilter placeholder={placeholder} />
      </Box>
    </TableToolbarWrapper>
  );
}

export default TableToolbar;
