import { Box, styled } from "@mui/material";

export const RecommededPromptWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== " isTryPrompt",
})`
  text-align: center;
  & .prompt_box_container {
    margin: auto auto;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 16px;
    max-height: ${({ isTryPrompt }) => {
      return isTryPrompt ? "calc(100vh - 434px)" : "calc(100vh - 498px)";
    }};

    overflow: auto;

    @media screen and (max-height: 650px) {
      padding-bottom: 2rem;
    }
  }
  & .recommended_prompt_container {
    margin-top: 12px !important;
    padding-right: 5px;
    overflow: auto;
    max-height: ${({ isTryPrompt }) => {
      return isTryPrompt ? "calc(100vh - 434px)" : "calc(100vh - 510px)";
    }};
  }
`;
