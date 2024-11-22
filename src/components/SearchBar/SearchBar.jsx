import React from "react";
import { Box, TextField, Button, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FilterListIcon from "@mui/icons-material/FilterList";
import { StyledBox, StyledButton, StyledTextField } from "./style";

export default function SearchBar() {
  return (
    <StyledBox>
      <StyledTextField
        variant="outlined"
        placeholder="Search"
        size="small"
        InputProps={{
          startAdornment: (
            <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
          ),
        }}
      />
      <StyledButton>
        <DateRangeIcon sx={{ mr: 1 }} />
        Select dates
      </StyledButton>
      {/* <StyledButton>
        <FilterListIcon sx={{ mr: 1 }} />
        Filters
      </StyledButton> */}
    </StyledBox>
  );
}
