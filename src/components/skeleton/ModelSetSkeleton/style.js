import { Box, styled } from "@mui/material";

export const ModelSetSkeletonWrapper = styled(Box)`
  width: 100%;
  background: var(--surface-l1);
  margin-top: 16px;
  & .skeleton_content {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    height: auto;
    width: calc(100% - 30px);
  }

  & .MuiSkeleton-root {
    border-radius: 4px;
  }
  & .skeleton_switch {
    border-radius: 16px;
  }
  & .card_header {
    height: 60px;
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    & .logo_frame {
      width: 60px;
      height: 60px;
    }
  }
`;
