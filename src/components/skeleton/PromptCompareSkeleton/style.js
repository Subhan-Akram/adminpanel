import { Box, styled } from "@mui/material";

export const PromptSkeletonWrapper = styled(Box)`
  & .model_container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 16px;
  }
  & .model_content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  & .MuiSkeleton-root {
    border-radius: 4px;
  }
`;
