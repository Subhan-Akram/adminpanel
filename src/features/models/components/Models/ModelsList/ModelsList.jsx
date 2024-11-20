import { Box, Grid } from "@mui/material";
import { ModelCardSkeleton, ZeroStateComponent } from "components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ModelCard from "./ModelCard";
import { useIsModelSelected } from "hooks";

const ModelsList = () => {
  const navigate = useNavigate();

  const {
    error: integrationError,
    isLoading: isModelSetLoading,
    modelSet,
  } = useSelector((state) => state.integration);
  const {
    isLoading: isModelCardLoading,
    models,
    error: modelError,
  } = useSelector((state) => state.models);
  const { isModeSelected } = useIsModelSelected();
  const [{ aiModelsInSet = [] } = {}] = modelSet || [];
  const isLoading = !!isModelCardLoading || !!isModelSetLoading;
  const isError = !!modelError || !!integrationError;
  const isZeroState = isError || !models.length;
  const isIntegrated = (modelId) => {
    return aiModelsInSet.some((item) => item.extId === modelId);
  };

  if (isLoading) {
    return (
      <Grid
        container
        justifyContent={"flex-start"}
        alignItems={"flex-stretch"}
        rowSpacing={10}
        className="loader_grid"
        columnSpacing={3}
      >
        {[1, 2, 3].map((val) => (
          <Grid item key={val} xs={12} sm={6} md={6} lg={4} xl={3}>
            <ModelCardSkeleton />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (isZeroState) {
    return (
      <Box className="zero_state">
        <ZeroStateComponent
          title="No Record Found!"
          text="No Search Result Found, Please try again"
          btnText={"Modify Search"}
          icon={true}
          handleClick={() => navigate("/")}
        />
      </Box>
    );
  }

  return (
    <Grid
      container
      justifyContent={"flex-start"}
      alignItems={"flex-stretch"}
      rowSpacing={6}
      className="model_container"
      columnSpacing={3}
    >
      {models.map((model) => (
        <Grid item key={model.extId} xs={12} sm={6} md={6} lg={4} xl={3}>
          <ModelCard
            data={model}
            active={isModeSelected(model.extId)}
            isIntegrated={isIntegrated(model.extId)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ModelsList;
