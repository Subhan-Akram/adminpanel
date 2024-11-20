/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import { Box, Breadcrumbs } from "@mui/material";
import { ModelBanner, SullyTypography, TabComponent } from "components";
import { comparisonTabs } from "features/compare/constants";
import { homePath } from "features/home";
import { modelPath } from "features/models";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RightArrowIcon } from "sullyIcons";
import { countObjects, getBreadcrumb, getParamsSerachValue } from "utils";
import GetBreadcrumb from "utils/getBreadcrumb";

const Compare = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { comparisonData } = useSelector((state) => state.compare);
  const splitPaths = pathname.slice(1).split("/");
  const getNavigatePath = `/${splitPaths
    .slice(0, splitPaths.length - 1)
    .join("/")}`;
  const currentTab = pathname.split("/").pop() || "feature";
  const isModelSelected = !!countObjects(comparisonData);
  const handleChange = (e, path) => {
    navigate(`${getNavigatePath}/${path}`);
  };

  return (
    <Box
      className={`page_spacing ${isModelSelected && pathname.includes("prompt") ? "prompt_layout" : ""}`}
    >
      <Breadcrumbs separator={<RightArrowIcon />} aria-label="breadcrumb">
        {GetBreadcrumb()}
      </Breadcrumbs>

      <Box className="page_title_box">
        <SullyTypography classNameProps="page_title">
          Compare Models
        </SullyTypography>
      </Box>
      {currentTab !== "prompt" && (
        <ModelBanner
          text={
            <SullyTypography
              classNameProps="modaltitle1_regular banner_text1"
              variant="body1"
            >
              {`Hey, You can compare LLM’s in both descriptive as well as you can try Prompts`}
            </SullyTypography>
          }
        />
      )}
      <TabComponent
        handleChange={handleChange}
        currentTab={currentTab}
        tabs={comparisonTabs}
      />
    </Box>
  );
};

export default Compare;
