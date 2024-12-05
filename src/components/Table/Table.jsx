import { useState } from "react";
import PropTypes from "prop-types";
import { TableWrapper } from "./style";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Table({ rows, columns, isLoading, CustomToolbar }) {
  const theme = useTheme();

  // Media queries to detect screen size
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [pageSize, setPageSize] = useState(5); // Default page size

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
      // rowHeight={}
      loading={isLoading}
      sortingOrder={["desc", "asc"]}
      columns={columns}
      getRowId={(row) => {
        return row.extId;
      }} // Custom row ID
      rows={rows}
      autoPageSize={true}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: pageSize,
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
