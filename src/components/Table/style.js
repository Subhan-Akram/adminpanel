import { Card, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const CardWrapper = styled(Card)`
  height: calc(100vh - 210px);
  border: 1px solid var(--border-1);
  margin-top: 26px;
  padding: 0;
`;
export const TableWrapper = styled(DataGrid)`
  overflow-x: auto;
  border-radius: 8px !important;
  width: 100%;
  border: none !important;
  min-height: 250px;
  min-width: 500px;
  & .MuiDataGrid-main {
    width: 100%;
    background-color: var(--surface-l2);
  }
  & .MuiDataGrid-overlay {
    background: var(--surface-l2);
    color: var(--text-primary);
    font-size: 16px;
  }
  & .MuiSkeleton-circular {
    width: 8px !important;
    height: 20px !important;
  }
  & .MuiDataGrid-toolbarContainer {
    padding: 12px 16px;
  }
  & .custom-align-left {
    justify-content: flex-start;
    text-align: left;
  }
  & .MuiDataGrid-cell {
    background-color: var(--surface-l2);
    border-top: 1px solid var(--border-1) !important;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0 1rem;
  }
  & .MuiDataGrid-filler {
    border-radius: none !important;
    background-color: var(--table-column-filler);
    border: none !important;

    div {
      background-color: var(--surface-l2);

      border: none;
    }
  }
  & .MuiDataGrid-columnHeader {
    border-radius: none !important;
    background-color: var(--table-column-filler);

    border: none !important;
    padding: 0 1rem;
    & .MuiDataGrid-columnHeaderTitle {
      font-size: 15px;
      font-weight: 400;
      z-index: 200;
    }
  }
  & .MuiDataGrid-columnSeparator {
    display: none;
  }
  & .MuiTablePagination-toolbar {
  }
  & .MuiDataGrid-footerContainer {
    border-color: var(--border-1) !important;
  }
  & .MuiInput-underline:before {
    border-bottom: none !important;
  }
  & .MuiDataGrid-toolbarQuickFilter {
    border: 1px solid var(--border-1) !important;
    padding-bottom: 0 !important;
    padding: 4px 8px;
    border-radius: 6px;
  }

  & .MuiInputBase-root {
    border-bottom: none !important;
  }
  & .MuiInput-root:before {
    border-bottom: none;
  }

  & .MuiInput-root:hover:not(.Mui-disabled):before {
    border-bottom: none !important;
  }
  & .MuiInput-root:after {
    border-bottom: none;
  }
  & .MuiDataGrid-scrollbar {
    height: 4px !important;
  }

  & .MuiButton-textPrimary {
  }
`;
