import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { StyledBox, StyledButton, StyledTextField } from "./style";
import PropTypes from "prop-types";
const SearchBar = ({ handleAction, placeholder }) => {
  const [value, setValue] = useState("");
  return (
    <StyledBox>
      <StyledTextField
        variant="outlined"
        placeholder={placeholder}
        size="small"
        value={value}
        onChange={(e) => {
          const { value } = e.target;
          setValue(value);
          setTimeout(() => {
            handleAction(value);
          }, 150);
        }}
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
};
export default SearchBar;
SearchBar.propTypes = {
  handleAction: PropTypes.func,
  placeholder: PropTypes.string,
};
