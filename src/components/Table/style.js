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
`;
