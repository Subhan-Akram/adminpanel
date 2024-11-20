/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import ModelCompareCard from "../ModelCompareCard";
import { PageHeader, PromptStyleWrapper } from "./style";
import { Box, Breadcrumbs } from "@mui/material";
import RecommendedPrompt from "../RecommentedPrompt";
import { PrimaryButton, SullyTypography } from "components";
import PromptWrite from "../PromptWrite";
import { useDispatch, useSelector } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { getModel } from "features/compare/services";
import { RightArrowIcon } from "sullyIcons";
import { getFearureComparison } from "features/compare/services";
import { ModelSetModal } from "features/integration";
import {
  useCreateModelSet,
  useIsModelSelected,
  useModelIsIntegrated,
  useRemoveModel,
} from "hooks";
import { removeTryPromptData } from "features/compare/slice";
import { addSelectedModel } from "features/models";
import { setModelsArray } from "features/models/slice";
import { triggerAlert } from "slice/alertSlice";
import GetBreadcrumb from "utils/getBreadcrumb";

function TryPrompt() {
  const promptChatRef = useRef(null);
  const { extId } = useParams();
  const { selectedModelCount, totalSelectedModels, isModeSelected } =
    useIsModelSelected();
  const { pathname } = useLocation();
  const splitPaths = pathname.slice(1).split("/");
  const getNavigatePath = `/${splitPaths.slice(0, splitPaths.length - 2).join("/")}`;
  const [selectedModelSet, setSelectedModelSet] = useState([]);
  const [isModelSetOpen, setIsModelSetOpen] = useState(false);
  const isIntegrated = useModelIsIntegrated(extId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { modelSet } = useSelector((state) => state.integration);
  const [{ aiModelsInSet = [] } = {}] = modelSet;
  const { tryPrompt, chatLoading, comparisonData } = useSelector(
    (state) => state.compare,
  );
  const handleModelSet = () => {
    setSelectedModelSet([tryPrompt]);
    setIsModelSetOpen(true);
  };
  const handleIntegration = () => {
    if (!isIntegrated) return handleModelSet();
    navigate(`${getNavigatePath}/integration`);
  };
  const handleCreateModelSet = useCreateModelSet(getNavigatePath);
  const tryPromptNavigate = () => {
    if (getNavigatePath.includes("comparision")) {
      navigate(`${getNavigatePath}/prompt`);
    } else {
      navigate(`${getNavigatePath}/comparision/prompt`);
    }
  };
  const handleFeatureCompare = async () => {
    const addToCompare =
      selectedModelCount < 3 ||
      totalSelectedModels.some((val) => val.extId === extId);
    if (addToCompare) {
      dispatch(
        getFearureComparison({
          models: [...comparisonData, tryPrompt],
          dispatch,
        }),
      );
      dispatch(addSelectedModel(tryPrompt));
      tryPromptNavigate();
    } else {
      dispatch(
        triggerAlert({
          title: "Model Comparison Limit Reached",
          text: "You can only compare up to 3 models at a time. Please remove an existing model from the comparison before adding a new one.",
          alertType: "warning",
        }),
      );
    }
  };

  useEffect(() => {
    dispatch(removeTryPromptData());
    dispatch(getModel({ dispatch, extId }));
  }, [dispatch, extId]);
  useEffect(() => {
    if (promptChatRef.current && chatLoading) {
      promptChatRef.current.scrollTo({
        behavior: "smooth",
        top: promptChatRef.current.scrollHeight,
      });
    }
  }, [chatLoading]);
  useEffect(() => {
    dispatch(setModelsArray({ name: "selectedModels", data: [] }));
  }, [dispatch]);
  return (
    <>
      <ModelSetModal
        isModelSetOpen={isModelSetOpen}
        setIsModelSetOpen={setIsModelSetOpen}
        selectedModelSet={selectedModelSet}
        handleClick={handleCreateModelSet}
      />
      <Box className="try_prompt_layout" ref={promptChatRef}>
        <PageHeader>
          <Box>
            <Breadcrumbs separator={<RightArrowIcon />} aria-label="breadcrumb">
              {GetBreadcrumb()}
            </Breadcrumbs>
            <SullyTypography
              classNameProps="page_title"
              onClick={() => {
                navigate(`/try-prompt?extId=${extId}`);
              }}
            >
              Try Prompt
            </SullyTypography>
          </Box>
          <Box className="header_btn">
            <PrimaryButton
              className="card_btn_2"
              onClick={handleFeatureCompare}
            >
              {isModeSelected(extId) ? "View Comparision" : "Compare"}
            </PrimaryButton>
            <PrimaryButton className="medium_btn_2" onClick={handleIntegration}>
              {isIntegrated ? "View Integration" : "Integrate"}
            </PrimaryButton>
          </Box>
        </PageHeader>
        <PromptStyleWrapper>
          <Box className="prompt_model_cards_container">
            <Box className="prompt_models_left ">
              <Box className="prompt_model_cards">
                <ModelCompareCard
                  key={extId}
                  isIntegrated={aiModelsInSet?.some(
                    (item) => item.extId === extId,
                  )}
                  data={tryPrompt}
                />
              </Box>
              <Box className="recommended_prompt_container">
                <RecommendedPrompt />
              </Box>
            </Box>
          </Box>

          <Box className="prompt_write_container">
            <PromptWrite />
          </Box>
        </PromptStyleWrapper>
      </Box>
    </>
  );
}

export default TryPrompt;
