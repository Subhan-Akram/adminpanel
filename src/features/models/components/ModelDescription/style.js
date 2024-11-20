import { Box, styled } from "@mui/material";

export const ModelDescriptionWrapper = styled(Box)`
  padding: 24px;
  padding-bottom: 0;
  margin-top: 40px;
  & .header_box {
    margin-bottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .zero_state {
    margin-top: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .description_container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  & .model_card {
    border-radius: 16px;
    border: 3px dashed var(--border-2);
    background: var(--surface-l1);
    width: 45%;
    min-width: 292px;

    & .header {
      display: flex;
      justify-content: flex-start;
      gap: 16px;
      align-items: center;
      & .comparision_title {
      }
    }

    & .MuiDivider-root {
      margin: 16px 0;
    }
  }
  & .cost_rating {
  }
  & .try_btn {
    width: 50%;
  }
  & .flex-between {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  & .model_card_right {
    height: calc(100vh - 180px);
    padding-right: 8px;
    width: 100%;
    overflow-y: auto;

    & .overview_card {
      margin-bottom: 16px;
    }

    & .sub_title_2_regular {
      margin-top: 16px;
    }
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
  @media screen and (max-width: 610px) {
    margin-top: 62px;
  }
`;
