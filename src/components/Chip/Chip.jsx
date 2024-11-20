import Stack from "@mui/material/Stack";
import { ChipWrapper } from "./style";
import PropTypes from "prop-types";

const Chip = ({ classNameProps, closable, label, onClick, Icon }) => {
  return (
    <Stack direction="row" spacing={1}>
      <ChipWrapper
        onDelete={closable}
        className={classNameProps}
        size="large"
        label={label}
        onClick={onClick}
        deleteIcon={Icon}
      />
    </Stack>
  );
};

Chip.propTypes = {
  stylesProps: PropTypes.object,
  closable: PropTypes.func,
  label: PropTypes.string,
  classNameProps: PropTypes.string,
  onClick: PropTypes.func,
  Icon: PropTypes.any,
};

export default Chip;
