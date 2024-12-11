/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import * as React from "react";
import Box from "@mui/material/Box";
import { CloseIcon } from "sullyIcons";
import { DrawerWrapper } from "./style";
import { LogoFrame, SullyTypography, TextButton } from "../../../../components";
import { useDispatch } from "react-redux";
import { getAllModelTags } from "../../services";

import FeatureEditor from "../FeatureEditor";

const ModelFeatureDrawer = ({ model, open, setOpen, setModel }) => {
  const { logoUrl, name } = model;
  // const [type, setType] = React.useState("view");

  const dispatch = useDispatch();

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };
  // const handleSubmit = async (values) => {
  //   console.log("values=", values);
  //   const { payload } = await dispatch(
  //     updateModel({ payload: values, dispatch })
  //   );
  //   console.log("payload====", payload);
  //   if (payload) {
  //     dispatch(
  //       triggerAlert({
  //         title: "Success",
  //         text: "Model Updated Successfully",
  //         alertType: "success",
  //       })
  //     );

  //     setModel(payload);
  //   }
  // };
  React.useEffect(() => {
    dispatch(getAllModelTags());
  }, [dispatch]);
  return (
    <React.Fragment>
      <DrawerWrapper anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <Box className="drawer_header">
          <Box className="logo_name">
            <LogoFrame
              className={"logo_frame_drawer"}
              imgLink={logoUrl}
            ></LogoFrame>
            <SullyTypography
              // sx={{ marginTop: "4px", fontSize: "20px !important" }}
              variant="body2"
              classNameProps={"sub_title_1_lg drawer_text"}
            >
              {name}
            </SullyTypography>
          </Box>
          {/* <Box className="btn_group">
            <IconButton onClick={() => {}}>
              <EditIcon />
            </IconButton>
          </Box> */}
          <TextButton className="close" onClick={toggleDrawer(false)}>
            <CloseIcon
              style={{
                width: "22px",
                height: "22px",
                fontSize: "32px !important",
              }}
            />
          </TextButton>
        </Box>

        <Box className="drawer_content">
          <FeatureEditor initialShow={1} />
        </Box>
      </DrawerWrapper>
    </React.Fragment>
  );
};

ModelFeatureDrawer.propTypes = {
  model: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  setModel: PropTypes.func,
};

export default ModelFeatureDrawer;

export const initialModel = {
  name: "Amazon Titan Express",
  description: "Titan Express from Amazon",
  ssbxCode: "TITAN_EXPRESS_MODEL",
  modelCard: "Titan Express from Amazon",
  originUrl: "https://aws.amazon.com/bedrock/titan/",
  logoUrl:
    "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked.547f032d90171cdea4dd90c258f47373c5573db5.png",
  rating: 3.5,
  createdBy: "Amazon",
  tags: [
    {
      name: "transformer",
      hint: "",
    },
    {
      name: "encoder-only",
      hint: "",
    },
    {
      name: "license: Apache 2.0",
      hint: "",
    },
  ],
  extId: "c956fc34-7ca2-4537-b2ea-5ba696ac77d7",
  enabled: true,
};
