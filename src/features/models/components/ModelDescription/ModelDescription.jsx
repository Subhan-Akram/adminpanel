/* eslint-disable no-debugger */
import {
  LogoFrame,
  ModelDescriptionSkeleton,
  OutlinedButton,
  PrimaryButton,
  Rating,
  SullyTypography,
  TextButton,
  ZeroStateComponent,
} from "components";
import { ModelDescriptionWrapper } from "./style";
import { RightArrowIcon } from "sullyIcons";
import { Box, Breadcrumbs, Card, Divider } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getModel } from "features/models/services";
import { useDispatch, useSelector } from "react-redux";
import { ModelSetModal } from "features/integration";
import {
  useCreateModelSet,
  useIsModelSelected,
  useModelIsIntegrated,
} from "hooks";
import { getAllModelSet } from "features/integration/services";
import { triggerAlert } from "slice/alertSlice";
import { getFearureComparison } from "features/compare";
import { addSelectedModel } from "features/models/slice";
import { setModelsArray } from "features/models/slice";
import GetBreadcrumb from "utils/getBreadcrumb";

function ModelDescription() {
  const { extId } = useParams();
  const location = useLocation();
  const { previousPages = [] } = location.state || {};
  const { pathname } = useLocation();
  const splitPaths = pathname.slice(1).split("/");
  const getNavigatePath = `/${splitPaths
    .slice(0, splitPaths.length - 2)
    .join("/")}`;
  const [{ path = "/" } = {}] = previousPages;
  const { selectedModelCount, totalSelectedModels, isModeSelected } =
    useIsModelSelected();
  const [isModelSetOpen, setIsModelSetOpen] = useState(false);
  const navigate = useNavigate();
  const isIntegrated = useModelIsIntegrated(extId);

  const {
    isLoading,
    error,
    model: { name, logoUrl, createdBy, rating, description, features },
    model,
  } = useSelector((state) => state.models);
  const { modelSet } = useSelector((state) => state.integration);

  const dispatch = useDispatch();
  const handleCreateModelSet = useCreateModelSet(getNavigatePath);
  const handleFeatureCompare = (path) => {
    if (selectedModelCount === 3) {
      return dispatch(
        triggerAlert({
          title: "Model Comparison Limit Reached",
          text: "You can only compare up to 3 models at a time. Please remove an existing model from the comparison before adding a new one.",
          alertType: "warning",
        }),
      );
    }
    dispatch(addSelectedModel(model));
    dispatch(
      getFearureComparison({
        models: [...totalSelectedModels, model],
        dispatch,
      }),
    );
    let link;

    if (getNavigatePath.includes("comparision")) {
      link = `${getNavigatePath}/${path}`;
    } else {
      link = `${getNavigatePath}/comparision/${path}`;
    }
    navigate(`${link}`);
  };
  const getTryPromptNavigate = () => {
    if (getNavigatePath.includes("comparision")) {
      navigate(`${getNavigatePath}/try-prompt/${extId}`);
    } else {
      navigate(`${getNavigatePath}/comparision/try-prompt/${extId}`);
    }
  };
  useEffect(() => {
    dispatch(getModel({ dispatch, extId }));
  }, [dispatch, extId]);
  useEffect(() => {
    const handleGetModelSet = async () => {
      if (!modelSet.length) await dispatch(getAllModelSet());
    };
    handleGetModelSet();
  }, [dispatch, modelSet.length]);
  useEffect(() => {
    dispatch(setModelsArray({ name: "selectedModels", data: [] }));
  }, [dispatch]);

  return (
    <>
      <ModelSetModal
        isModelSetOpen={isModelSetOpen}
        setIsModelSetOpen={setIsModelSetOpen}
        selectedModelSet={[model]}
        handleClick={handleCreateModelSet}
      />
      <ModelDescriptionWrapper>
        <Breadcrumbs separator={<RightArrowIcon />} aria-label="breadcrumb">
          {GetBreadcrumb()}
        </Breadcrumbs>

        {isLoading && <ModelDescriptionSkeleton />}
        {error && (
          <Box className="zero_state">
            <ZeroStateComponent
              title="No Record Found!"
              text="No LLM Model  Found, Please try again"
              btnText={"Go Back"}
              icon={true}
              handleClick={() => {
                navigate(path);
              }}
            />
          </Box>
        )}
        {!isLoading && !error && (
          <>
            <Box className="header_box">
              {" "}
              <SullyTypography classNameProps="page_title" variant="body1">
                {name}
              </SullyTypography>
              <PrimaryButton
                onClick={() => {
                  isIntegrated
                    ? navigate(`${getNavigatePath}/integration`)
                    : setIsModelSetOpen(true);
                }}
              >
                {isIntegrated ? "View Integration" : "Integrate"}
              </PrimaryButton>
            </Box>
            <Box className="description_container">
              <Card className="model_card">
                <Box className="header">
                  <LogoFrame
                    className="logo_frame_large"
                    imgLink={logoUrl}
                  ></LogoFrame>
                  <Box className="model_content">
                    <SullyTypography
                      variant="h4"
                      classNameProps="comparision_title"
                    >
                      {name}
                    </SullyTypography>
                    <SullyTypography variant="body1" classNameProps="card_text">
                      created by {createdBy}
                    </SullyTypography>
                  </Box>
                </Box>
                <Divider />
                <SullyTypography classNameProps="sub_title_2_regular">
                  {description}
                </SullyTypography>
                <Divider />
                <Box className="flex-between">
                  <SullyTypography classNameProps="link">
                    Calculate Cost
                  </SullyTypography>
                  <Rating rating={rating} />
                </Box>
                <Divider />
                <Box className="flex-between">
                  <Box className="try_btn">
                    {" "}
                    {isModeSelected(extId) ? (
                      <OutlinedButton
                        onClick={() => {
                          navigate(
                            `${getNavigatePath.includes("comparision") ? `${getNavigatePath}/feature` : `${getNavigatePath}/comparision/feature`}`,
                          );
                        }}
                      >
                        View Comparision
                      </OutlinedButton>
                    ) : (
                      <OutlinedButton
                        onClick={() => {
                          handleFeatureCompare("feature");
                        }}
                      >
                        Compare
                      </OutlinedButton>
                    )}
                  </Box>
                  <Box className="try_btn">
                    {" "}
                    <PrimaryButton
                      onClick={getTryPromptNavigate}
                      className="card_btn_1"
                    >
                      Try Prompt
                    </PrimaryButton>
                  </Box>
                </Box>
              </Card>
              <Box className="model_card_right">
                {features
                  .filter((val) => val.title !== "Calculate")
                  .map(({ title, category, description }) => (
                    <Card key={title} className="overview_card">
                      <TextButton className="lg_btn">{title}</TextButton>
                      <SullyTypography classNameProps="sub_title_2_regular">
                        {description}
                      </SullyTypography>
                    </Card>
                  ))}
              </Box>
            </Box>
          </>
        )}
      </ModelDescriptionWrapper>
    </>
  );
}

export default ModelDescription;
