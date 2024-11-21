import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import PropTypes from "prop-types";

export default function Table({ rows, columns }) {
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
    <DataGrid
      sx={{
        overflowX: "auto",
        width: "100%",
        minHeight: "250px",
        minWidth: "500px",
        "& .MuiDataGrid-filler": { backgroundColor: "var(--table-header)" },
      }}
      slots={{
        toolbar: CustomToolbar,
      }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 },
        },
      }}
      sortingOrder={["desc", "asc"]}
      columns={columns}
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
