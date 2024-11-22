import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { TableWrapper } from "./style";
import { Card, TextField } from "@mui/material";
import SullyTypography from "../SullyTypography";

export default function Table({ rows, columns, isLoading }) {
  const CustomToolbar = () => (
    <GridToolbarContainer
      sx={{
        padding: "6px 0 0 0",
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
      }}
    >
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
  return (
    <TableWrapper
      // slots={{
      //   toolbar: CustomToolbar,
      // }}
      // slotProps={{
      //   toolbar: {
      //     showQuickFilter: true,
      //     quickFilterProps: { debounceMs: 500 },
      //   },
      // }}
      loading={isLoading}
      sortingOrder={["desc", "asc"]}
      columns={columns}
      getRowId={(row) => row.extId} // Custom row ID
      rows={rows}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5, 10, 15]}
      disableRowSelectionOnClick={true}
      disableColumnSelector
      disableColumnMenu
      disableColumnResize
    />
  );
}

Table.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
};
