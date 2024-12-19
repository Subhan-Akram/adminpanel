import { Box, styled } from "@mui/material";

export const ModelFeatureWrapper = styled(Box)`
  padding: 16px;
  border: 1px solid var(--border-1);
  border-radius: 8px;
  background-color: var(--surface-l2);

  .feature-section {
    margin-bottom: 22px;
    &:last-child {
    }
  }

  .feature-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 6px 0;

    /* list-style-type: disc; */
    /* border: 1px solid red; */
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 0px;
    /* border: 1px solid var(--border-2); */
    /* border-radius: 4px; */
    /* background-color: var(--background-2); */
  }

  .feature-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--secondary-text);
  }

  .feature-description {
    font-size: 14px;
    color: var(--primary-text);
  }
`;
