/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { DrawerWrapper } from "./style";
import {
  PrimaryButton,
  Rating,
  SullyTypography,
  TextButton,
} from "../../../../components";

const ModelDrawer = ({ model, open, setOpen }) => {
  const { name, description, modelcard, rating } = model;

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      className="drawer_content"
      role="presentation"
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box>
        <SullyTypography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Name:
        </SullyTypography>
        <SullyTypography variant="body2" color="text.secondary">
          {name}
        </SullyTypography>
      </Box>
      <Box>
        <SullyTypography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Description:
        </SullyTypography>
        <SullyTypography variant="body2" color="text.secondary">
          {description}
        </SullyTypography>
      </Box>

      <Box>
        <SullyTypography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Model Card:
        </SullyTypography>
        <SullyTypography variant="body2" color="text.secondary">
          {modelcard}
        </SullyTypography>
      </Box>

      <Box>
        <SullyTypography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Rating:
        </SullyTypography>
        <SullyTypography variant="body2" color="text.secondary">
          {rating}
        </SullyTypography>
      </Box>
    </Box>
  );

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer(true)}>Create Model</Button>
      <DrawerWrapper anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <Box className="drawer_header">
          <SullyTypography>Model Details</SullyTypography>
          <TextButton>Edit Model</TextButton>
        </Box>
        {list()}
      </DrawerWrapper>
    </React.Fragment>
  );
};

export default ModelDrawer;
