import { Box, Accordion, styled } from "@mui/material";
export const PageContainer = styled(Box)(({ theme }) => ({
  maxWidth: 800,
  margin: "0 auto",
  padding: "16px",
}));

export const CategoryAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: "16px",
  "&:before": {
    display: "none",
  },
}));

export const FeatureItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "var(--surface-l2)",
  borderRadius: "12px",
}));

export const FeatureEditorWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  & .feature_item_box {
    border: 1px solid var(--border-1);
    padding: 16px 24px;
    margin-bottom: 16px;
    border-radius: 8px;
    ul {
      list-style: none;
      padding-inline-start: 0;
      margin: 0;
      li {
        margin-bottom: 16px;
        margin-top: 8px;
        border: 5px dotted var(--border-1);
        padding: 24px;
        padding-top: 16px;
        border-radius: 12px;
        background: var(--surface-l2);
      }
      .text_field {
        margin-top: 6px;
      }
    }
    & .delete_box {
      display: flex;
      align-items: center;
      position: absolute;
      top: 12px;
      right: -10px;
      & .icon_btn {
        /* color: var(--red); */
        & svg {
          font-size: 18px;
        }
      }
    }
  }
`;
