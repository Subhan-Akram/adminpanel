import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const TableWrapper = styled(DataGrid)`
  overflow-x: auto;
  width: 100%;
  /* margin-top: 0px; */
  border: none !important;
  min-height: 250px;
  min-width: 500px;
  & .MuiDataGrid-cell {
    background-color: var(--surface-l1);
    /* border: none !important; */
  }
  & .MuiDataGrid-filler {
    background-color: var(--surface-l1);
    border: none !important;
    div {
      border-top: none;
    }
  }
  & .MuiDataGrid-columnHeader {
    background-color: var(--surface-l1);

    border: none !important;
  }
  & .MuiDataGrid-columnSeparator {
    display: none;
  }
  & .MuiTablePagination-toolbar {
    border: none !important;
  }
`;
