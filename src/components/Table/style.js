import { Card, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const CardWrapper = styled(Card)`
  height: calc(100vh - 190px);
  border: 1px solid var(--border-1);
  margin-top: 26px;
  padding: 0;
`;
export const TableWrapper = styled(DataGrid)`
  overflow-x: auto;
  border-radius: 0 !important;
  width: 100%;
  /* margin-top: 0px; */
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
    /* border: none !important; */
  }
  & .MuiDataGrid-filler {
    border-radius: none !important;
    background-color: var(--table-column-filler);
    /* border-bottom: 1px solid var(--border-2) !important; */
    border: none !important;
    div {
      background-color: var(--surface-l2);

      border: none;
    }
  }
  & .MuiDataGrid-columnHeader {
    border-radius: none !important;
    /* border-bottom: 1px solid var(--border-2) !important; */
    background-color: var(--table-column-filler);

    border: none !important;
    & .MuiDataGrid-columnHeaderTitle {
      font-size: 15px;
      font-weight: 400;

      /* opacity: 1; */
      z-index: 200;
    }
  }
  & .MuiDataGrid-columnSeparator {
    display: none;
  }
  & .MuiTablePagination-toolbar {
    /* border: none !important; */
    /* background-color: var(--surface-l3); */
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
  /* & .MuiButton-textPrimary {
    font-family: "satoshi";
    box-sizing: border-box;
    height: 40px;
    font-size: 16px;
    background: transparent;
    color: var(--tertiary-button-text-icon);
    border: 1px solid var(--tertiary-button-border);
    text-transform: capitalize;
    font-weight: 500 !important;
    border-radius: 8px;
    padding: 8px 16px;
    &:hover {
      background: var(--tertiary-button-hover);
      border: 1px solid var(--tertiary-button-border);
    }
  } */
  & .MuiButton-textPrimary {
    /* font-family: "satoshi";
    box-sizing: border-box;
    font-size: 16px;
    border: none;
    background: transparent;
    color: var(--tertiary-button-text-icon);
    text-transform: capitalize;
    font-weight: 500 !important;
    border-radius: 8px;
    &:hover {
      background: var(--tertiary-button-hover); */
    /* border: 1px solid var(--tertiary-button-border); */
  }
  /* } */
`;
