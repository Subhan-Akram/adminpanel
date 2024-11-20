import { Box, styled } from "@mui/material";

export const PromptStyleWrapper = styled(Box)`
  & .prompt_model_cards_container {
    display: flex;
    z-index: 140;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;

    & .right_box_feature_icon {
      position: absolute;
      right: -28px;
      display: flex;
      top: 20px;
      cursor: pointer;
      & svg {
        width: 30px;
        & path {
          fill: var(--icon-brand);
        }
      }
    }
  }
  & .recommended_prompt_container_box {
    margin: auto auto;
    margin-top: 44px;
    width: 90%;
  }
  & .prompt_card_box {
    position: "relative";
    width: "100%";
    border: 1px solid red;
  }
  & .prompt_models_left {
    width: 100%;
    top: 58px;
    overflow: visible;
    gap: 24px;
  }
  & .prompt_sticky_box {
    overflow: visible;
  }
  & .prompt_model_cards {
    display: flex;
    background: var(--surface-l0);
    justify-content: space-between;
    position: sticky;
    gap: 24px;
    margin-top: 24px;
  }

  & .add_llm_card {
    width: 35px;
    cursor: pointer;
    display: flex;
    gap: 1rem;
    align-items: center;
    height: calc(100vh - 388px);
    margin-top: 24px;
    right: 0;
    overflow: visible;
    & .add_card_box {
      display: flex;
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      height: 200px;
    }
    & .MuiButton-root {
      text-align: center;
      transform: rotate(90deg);
      transform-origin: center;
      text-align: center;
      cursor: pointer;
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
      width: auto;
      height: auto;
      white-space: nowrap;
      padding: 8px;
    }
    & .add_llm_text {
      padding: 10px;
      display: flex;
      align-items: center;
      border-radius: 8px;
      gap: 6px;
      margin-top: 1.7rem;
    }
  }
  & .prompt_write_container {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    border-top: 1px solid var(--border-1);
    background: var(--surface-l1);
    padding: 12px 0;
    z-index: 130;
  }
  @media (max-width: 1024px) {
    & .recommended_prompt_container_box {
      width: 100%;
    }
  }
`;
