import { useState } from "react";
import PropTypes from "prop-types";
import { CardWrapper, TableWrapper } from "./style";

const Table = ({ rows, columns, isLoading, CustomToolbar }) => {
  return (
    <CardWrapper>
      <TableWrapper
        slots={{
          toolbar: CustomToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
          loadingOverlay: {
            variant: "skeleton",
            noRowsVariant: "skeleton",
          },
        }}
        rowHeight={58}
        loading={isLoading}
        sortingOrder={["desc", "asc"]}
        columns={columns}
        getRowId={(row) => row.extId}
        rows={rows}
        autoPageSize={true}
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
    </CardWrapper>
  );
};

export default Table;

Table.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  isLoading: PropTypes.bool,
  CustomToolbar: PropTypes.any,
};
