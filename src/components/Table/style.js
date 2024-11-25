import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const TableWrapper = styled(DataGrid)`
  overflow-x: auto;
  border-radius: 0 !important;
  width: 100%;
  /* margin-top: 0px; */
  border: none !important;
  min-height: 250px;
  min-width: 500px;
  & .custom-align-left {
    justify-content: flex-start;
    text-align: left;
  }
  & .MuiDataGrid-cell {
    background-color: var(--surface-l2);
    border-top: 1px solid var(--border-1) !important;

    /* border: none !important; */
  }
  & .MuiDataGrid-filler {
    border-radius: none !important;
    background-color: var(--surface-l3);
    /* border-bottom: 1px solid var(--border-2) !important; */
    border: none !important;
    div {
      border-top: none;
    }
  }
  & .MuiDataGrid-columnHeader {
    border-radius: none !important;
    /* border-bottom: 1px solid var(--border-2) !important; */
    background-color: var(--surface-l3);

    border: none !important;
    & .MuiDataGrid-columnHeaderTitle {
      font-size: 13px;
      font-weight: 500;
    }
  }
  & .MuiDataGrid-columnSeparator {
    display: none;
  }
  & .MuiTablePagination-toolbar {
    /* border: none !important; */
    background-color: var(--surface-l3);
  }
  & .MuiDataGrid-footerContainer {
    border-color: var(--border-1) !important;
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
