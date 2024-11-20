import { useDispatch, useSelector } from "react-redux";
import { PromptStyleWrapper } from "./style";
import ModelCompareCard from "../ModelCompareCard";
import { Box, Card } from "@mui/material";
import {
  OutlinedButton,
  PromptModelCardSkeleton,
  SullyTypography,
} from "components";
import Add from "@mui/icons-material/Add";
import PromptWrite from "../PromptWrite";
import RecommendedPrompt from "../RecommentedPrompt";
import { useEffect, useRef } from "react";
import { getAllModelSet } from "features/integration/services";
import PropType from "prop-types";
import { setModelsArray } from "features/models/slice";
import { setCollectionByName } from "features/home";

const Prompt = ({ handleModal }) => {
  const dispatch = useDispatch();
  const promptChatRef = useRef();
  const { isLoading, comparisonData, chatLoading } = useSelector(
    (state) => state.compare,
  );
  const { modelSet, error } = useSelector((state) => state.integration);
  const filterMergeCollection = comparisonData.filter((val) => val.extId);

  useEffect(() => {
    if (!modelSet.length) {
      dispatch(getAllModelSet(dispatch));
    }
  }, [dispatch, modelSet.length]);

  useEffect(() => {
    if (promptChatRef.current && chatLoading) {
      promptChatRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [chatLoading]);

  return (
    !error && (
      <PromptStyleWrapper ref={promptChatRef}>
        <Box className="prompt_model_cards_container">
          <Box className="prompt_models_left ">
            <Box className="prompt_model_cards">
              {!filterMergeCollection.length && isLoading && (
                <PromptModelCardSkeleton />
              )}
              {!!filterMergeCollection.length &&
                filterMergeCollection.map((val, i) => {
                  return (
                    <ModelCompareCard index={i} key={val.extId} data={val} />
                  );
                })}
            </Box>
            <Box className="recommended_prompt_container_box">
              <RecommendedPrompt />
            </Box>
          </Box>
          {filterMergeCollection.length < 3 ? (
            <Box className="prompt_sticky_box">
              <Card
                onClick={() => {
                  handleModal(true);
                  dispatch(
                    setModelsArray({ name: "selectedModels", data: [] }),
                  );
                  dispatch(setCollectionByName({ name: "tags", data: [] }));
                }}
                className="add_llm_card "
              >
                <OutlinedButton className="add_llm_prompt">
                  <SullyTypography classNameProps="add_llm_text title1_secondary">
                    <Add />
                    Add LLM Model
                  </SullyTypography>
                </OutlinedButton>
              </Card>
            </Box>
          ) : (
            ""
          )}
        </Box>

        <Box className="prompt_write_container">
          <PromptWrite />
        </Box>
      </PromptStyleWrapper>
    )
  );
};
Prompt.propTypes = {
  handleModal: PropType.func,
};
export default Prompt;
