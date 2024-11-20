import { Box, TextField } from "@mui/material";
import { AutoCompleteStyledPopper, AutoCompleteWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { setCollectionByName } from "features/home";
import { useEffect, useRef } from "react";

const TagsAutocomplete = ({
  searchBoxWidth,
  data,
  children,
  setSearchWidth,
}) => {
  const { allModelTags } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const box1Ref = useRef(null);
  const handleChange = (val) => {
    dispatch(
      setCollectionByName({
        name: "tags",
        data: val,
      }),
    );
  };
  useEffect(() => {
    const calculateDistance = () => {
      if (box1Ref.current) {
        const box1Rect = box1Ref.current.getBoundingClientRect();
        setSearchWidth(box1Rect.width);
      }
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, [setSearchWidth]);

  return (
    <AutoCompleteWrapper
      ref={box1Ref}
      multiple
      value={data}
      PopperComponent={(props) => (
        <AutoCompleteStyledPopper
          {...props}
          anchorEl={box1Ref.current}
          width={`${searchBoxWidth}px`}
          placement="bottom-start"
        />
      )}
      clearIcon={false}
      id="size-small-outlined-multi"
      size="small"
      options={allModelTags.map((val) => val.name)}
      getOptionLabel={(option) => option}
      onChange={(e, val) => {
        handleChange(val);
      }}
      renderTags={(value) =>
        value.map(() => {
          return "";
        })
      }
      renderInput={(params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {children}

          <TextField
            {...params}
            placeholder={!data?.length ? "Ask Sully..." : ""}
            variant="filled"
          />
        </Box>
      )}
    />
  );
};

TagsAutocomplete.propTypes = {
  setSearchWidth: PropTypes.func,
  searchBoxWidth: PropTypes.any,
  children: PropTypes.node,
  data: PropTypes.array.isRequired,
};
export default TagsAutocomplete;
