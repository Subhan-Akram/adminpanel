import PropTypes from "prop-types";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { ModelDetailsWrapper } from "./style";
import { LogoFrame, SullyTypography } from "components";
import { IconButton } from "@mui/material";
import { DrawerHeaderWrapper, DrawerContentWrapper } from "globalStyles";
import ModelView from "../ModelView";
import ModelEdit from "../ModelEdit";

const ModelDetails = ({ model, open, setOpen, setModel, type, setType }) => {
  const { logoUrl, name } = model;

  const toggleDrawer = (open) => () => {
    setOpen(open);
    setType("view");
  };

  return (
    <ModelDetailsWrapper
      anchor={"right"}
      open={open}
      onClose={toggleDrawer(false)}
    >
      <DrawerHeaderWrapper>
        <Box className="logo_name">
          <LogoFrame
            className={"logo_frame_drawer"}
            imgLink={logoUrl}
          ></LogoFrame>
          <SullyTypography
            variant="body2"
            classNameProps={"sub_title_1_lg drawer_text"}
          >
            {name}
          </SullyTypography>
          {type === "view" && (
            <IconButton
              className="edit"
              onClick={() => {
                setType("edit");
              }}
            >
              <EditIcon />
            </IconButton>
          )}
        </Box>
        {type === "view" && (
          <Box className="btn_group">
            <IconButton
              className="close"
              aria-label="close"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        )}
        {type === "edit" && (
          <IconButton
            className="close"
            aria-label="close"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DrawerHeaderWrapper>
      {type === "view" && <ModelView data={model} />}
      {type === "edit" && (
        <ModelEdit model={model} setModel={setModel} setType={setType} />
      )}
    </ModelDetailsWrapper>
  );
};

ModelDetails.propTypes = {
  model: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  setModel: PropTypes.func,
};

export default ModelDetails;
