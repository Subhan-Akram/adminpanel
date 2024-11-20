import { Box, styled } from "@mui/material";

export const ModelHeaderWrapper = styled(Box, {
  shouldForwardProp: (props) =>
    props !== "isPromptAvailable" && props !== "cardWidth",
})`
  border-radius: 16px;

  & .model_compare_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    border-bottom: ${({ isPromptAvailable }) => {
      return isPromptAvailable ? "1px solid var(--border-1)" : "none";
    }};
    background: var(--surface-l1);
    padding: 16px;
  }
  & .model_compare_header_left {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    align-items: center;
  }
  & .model_name_compare {
    max-width: ${({ cardWidth }) => {
      return cardWidth
        ? `calc(${cardWidth}px - ${cardWidth / 2.2}px)`
        : "120px";
    }};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  & .cancel_icon {
    position: absolute;
    top: -17px;
    cursor: pointer;
    z-index: 120;
    left: 50%;
  }

  @media screen and (max-width: 1024px) {
    & .model_compare_header {
      padding: 8px;
    }
  }
`;
