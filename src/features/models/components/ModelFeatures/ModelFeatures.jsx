import React from "react";
import { ModelFeatureWrapper } from "./style";
import { SullyTypography } from "components";
import { Box } from "@mui/material";

const ModelFeatures = () => {
  return (
    <ModelFeatureWrapper>
      {[].map(({ title, data }) => (
        <Box className="feature-section" key={title}>
          <SullyTypography classNameProps="modaltitle1">
            {title}
          </SullyTypography>
          <ul className="feature-list">
            {[].map(({ title, description }) => (
              <li className="feature-item" key={title}>
                <SullyTypography classNameProps="sub_title_2">
                  {title}:
                </SullyTypography>
                <SullyTypography classNameProps="card_title_3">
                  {description}
                </SullyTypography>
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </ModelFeatureWrapper>
  );
};

export default ModelFeatures;
