import { SullyTypography } from "components";
import { integrationModelBreadCrumb } from "features/integration/constants";
import { DetailIntegrationWrapper } from "./style";
import IntegrationCard from "../Integration/IntegrationCard";
import { Box, Breadcrumbs } from "@mui/material";
import { RightArrowIcon } from "sullyIcons";
import { useLocation, useParams } from "react-router-dom";
import CodeSdk from "../Integration/CodeSdk";
import { useSelector } from "react-redux";

const DetailIntegration = () => {
  const params = useParams();
  const model = params.model;
  const location = useLocation();
  const { modelSet } = useSelector((state) => state.integration);

  const modelSetExtId = location.state;
  const getCardData = modelSet.find(
    (val) => val.modelSetExtId === modelSetExtId,
  );

  const filteredCardData = getCardData
    ? {
        ...getCardData,
        aiModelsInSet: getCardData.aiModelsInSet?.filter(
          (val) => val.name === model,
        ),
      }
    : null;
  return (
    <DetailIntegrationWrapper className="page_spacing">
      <Breadcrumbs separator={<RightArrowIcon />} aria-label="breadcrumb">
        {integrationModelBreadCrumb(model)}
      </Breadcrumbs>

      <SullyTypography classNameProps="page_title">{model}</SullyTypography>
      <Box className="integration_box">
        {getCardData && <IntegrationCard {...filteredCardData} />}
      </Box>
      <CodeSdk modelSetExtId={modelSetExtId} />
    </DetailIntegrationWrapper>
  );
};

export default DetailIntegration;
