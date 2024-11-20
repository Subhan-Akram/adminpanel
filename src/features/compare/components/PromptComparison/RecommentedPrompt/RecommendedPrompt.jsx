import { Grid } from "@mui/material";
import { SullyTypography } from "components";
import { useEffect } from "react";
import PromptBox from "../PromptBox";
import { useDispatch, useSelector } from "react-redux";
import { RecommededPromptWrapper } from "./style";
import { getRecommendedPrompts } from "features/compare/services";
import { RecommendedPromptSkeleton } from "components/skeleton";
import { useLocation } from "react-router-dom";

const RecommendedPrompt = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isTryPrompt = pathname.includes("/try-prompt");
  const {
    promptData: comparePromptData,
    tryPrompt,
    recommendedPrompts: recommendedPromptCollection,
    isRecommendedPromptLoading,
    chatLoading,
  } = useSelector((state) => state.compare);
  const promptData = isTryPrompt ? tryPrompt.promptData : comparePromptData;
  useEffect(() => {
    if (!promptData.length) {
      dispatch(getRecommendedPrompts(dispatch));
    }
  }, [dispatch, promptData.length]);

  return (
    <RecommededPromptWrapper
      isTryPrompt={isTryPrompt}
      className="prompt_box_container_main"
    >
      {!promptData.length && isRecommendedPromptLoading && !chatLoading ? (
        <>
          <SullyTypography classNameProps="prompt_subtitle">
            You may want to try
          </SullyTypography>
          <Grid
            container
            direction="row"
            spacing={"16px"}
            className="recommended_prompt_container"
          >
            {[1, 2, 3, 4, 5, 6].map((val) => (
              <Grid xs={12} sm={4} key={val} item>
                <RecommendedPromptSkeleton key={val} />
              </Grid>
            ))}
          </Grid>
          {/* <Box className="prompt_box_container">
            {[1, 2, 3, 4, 5, 6].map((val) => (
              <RecommendedPromptSkeleton key={val}></RecommendedPromptSkeleton>
            ))}
          </Box> */}
        </>
      ) : (
        ""
      )}
      {!promptData.length && !isRecommendedPromptLoading && !chatLoading && (
        <>
          <SullyTypography classNameProps="prompt_subtitle">
            You may want to try
          </SullyTypography>
          <Grid
            container
            direction="row"
            spacing={"16px"}
            className="recommended_prompt_container"
          >
            {recommendedPromptCollection.map((val, i) => (
              <Grid xs={12} sm={4} key={i} item>
                {" "}
                <PromptBox promptText={val} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </RecommededPromptWrapper>
  );
};

export default RecommendedPrompt;
