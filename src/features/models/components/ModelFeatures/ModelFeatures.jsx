import React from "react";
import { ModelFeatureWrapper } from "./style";
import { SullyTypography } from "../../../../components";
import { Box, List, ListItem } from "@mui/material";

const data = [
  {
    title: "Strength",
    data: [
      {
        title: "Architecture",
        description: "It's strength lies in its architecture",
      },
      {
        title: "Durability",
        description: "Built to withstand harsh conditions",
      },
    ],
  },
  {
    title: "Performance",
    data: [
      {
        title: "Speed",
        description: "Fast response time under heavy load",
      },
      {
        title: "Optimization",
        description: "Optimized for scalability",
      },
    ],
  },
  {
    title: "Usability",
    data: [
      {
        title: "User Interface",
        description: "Intuitive and easy-to-use interface",
      },
      {
        title: "Accessibility",
        description: "Compliant with accessibility standards",
      },
    ],
  },
];

const ModelFeatures = () => {
  return (
    <ModelFeatureWrapper>
      {data.map(({ title, data }) => (
        <Box className="feature-section" key={title}>
          <SullyTypography classNameProps="card_title_1">
            {title}
          </SullyTypography>
          <ul className="feature-list">
            {data.map(({ title, description }) => (
              <li className="feature-item" key={title}>
                <SullyTypography classNameProps="card_title_2">
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
