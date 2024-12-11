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
