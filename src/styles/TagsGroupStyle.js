import { Box, styled } from "@mui/material";

const TagsGroupStyle = styled(Box)`
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  width: 100%;
  gap: 4px;
  align-items: center;
  height: 100%;

  & .MuiChip-root {
    border-radius: 36px !important;
    font-size: 14px;
    box-sizing: border-box;
    font-weight: 500;
    font-family: satoshi;
    height: 25px !important;
    background: var(--model-icon-bg) !important;
    border: 1px solid var(--model-icon-bg);
    color: var(--text-brand);
  }
`;
export default TagsGroupStyle;
