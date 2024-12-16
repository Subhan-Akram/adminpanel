import { styled } from "@mui/material";
import { GridToolbarContainer } from "@mui/x-data-grid";

export const TableToolbarWrapper = styled(GridToolbarContainer)`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  & .content_box {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
  }
`;
