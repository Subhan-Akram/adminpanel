import { Box, styled } from "@mui/material";

export const ModelDescriptionSkeletonWrapper = styled(Box)`
  margin-top: 16px;
  & .header_box {
    margin-bottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .description_container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  & .model_card {
    border-radius: 16px;
    border: 1px dashed var("--border-2");
    background: var("--surface-l1");
    width: 474px;
    padding: 16px;

    & .header {
      display: flex;
      justify-content: flex-start;
      height: 70px;
      /* gap: 16px; */

      align-items: center;
      & .MuiSkeleton-root {
        padding: 0;
        margin: 0;
      }
    }
    & .group_box {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      height: 42px;
      margin-top: -10px;
    }
    & .skeleton_divider {
      margin: 16px 0;
    }
  }
  & .detail_card_skeleton {
    & .title {
      margin-bottom: 16px !important;
    }
    & .MuiSkeleton-root {
      margin-bottom: 10px;
    }
  }
  & .detail_card_skeleton_2 {
    margin-top: 16px;
  }
  & .model_card_right {
    /* height: calc(100vh - 180px); */
    padding-right: 8px;
    width: 100%;
    overflow-y: auto;
  }

  @media screen and (max-width: 700px) {
    & .description_container {
      flex-direction: column;
    }
    & .model_card {
      width: calc(100% - 40px);
      max-width: 100%;
    }
  }
`;
