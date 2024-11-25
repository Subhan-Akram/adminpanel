import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { TableWrapper } from "./style";

export default function Table({
  rows,
  columns,
  isLoading,
  CustomToolbar = null,
}) {
  return (
    <TableWrapper
      slots={{
        toolbar: CustomToolbar,
      }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 },
        },
      }}
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
  isLoading: PropTypes.bool,
  CustomToolbar: PropTypes.any,
};
