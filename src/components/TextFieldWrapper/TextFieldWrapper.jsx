import { TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const TextFieldWrapper = ({ onChange, value, ...props }) => {
  const [innerValue, setInnerValue] = useState("");

  useEffect(() => {
    if (value) {
      setInnerValue(value);
    }
  }, [value]);

  const debouncedHandleOnChange = useDebouncedCallback((event) => {
    if (onChange) {
      onChange(event);
    }
  }, 250);

  const handleOnChange = useCallback((event) => {
    event.persist();
    const newValue = event.currentTarget.value;
    setInnerValue(newValue);
    debouncedHandleOnChange(event);
  }, []);

  return <TextField {...props} value={innerValue} onChange={handleOnChange} />;
};

export default TextFieldWrapper;
