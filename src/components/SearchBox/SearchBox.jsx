import { Box } from "@mui/material";
import { ModelSearchBoxWrapper } from "./style.jsx";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchDone } from "features/home/slice";
import PrimaryButton from "components/PrimaryButton";
import { Chip, SullyTypography, TagsAutocomplete } from "components";
import { getAllModelSet } from "features/integration/services";
import { getSearchModels } from "features/models";
import PropTypes from "prop-types";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { TagTooltip } from "components/TagsAutoComplete/style.jsx";

const SearchBox = ({ tags, handleTagRemove }) => {
  const chipBoxRef = useRef(null);
  const searchBoxRef = useRef();
  const box1Ref = useRef(null);
  const dispatch = useDispatch();
  const { modelSet } = useSelector((state) => state.integration);

  const [searchWidth, setSearchWidth] = useState(0);

  const handleModelSetCheck = async () => {
    try {
      if (!modelSet.length) {
        const { payload } = await dispatch(getAllModelSet(dispatch));
        return payload;
      }
      return true;
    } catch (err) {
      return false;
    }
  };
  const handleSearch = async () => {
    const data = await handleModelSetCheck();

    if (data) {
      dispatch(
        getSearchModels({
          tags,
          dispatch,
          isModal: true,
        }),
      );
      dispatch(setSearchDone(true));
    }
  };

  const getTagsLimitValue = () => {
    if (searchWidth > 800) return 4;
    if (searchWidth > 612) return 3;
    if (searchWidth < 612) return 2;
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
  }, []);

  return (
    <>
      <ModelSearchBoxWrapper ref={searchBoxRef} className="searches">
        <Box className="search_box">
          <TagsAutocomplete
            searchBoxWidth={searchBoxRef?.current?.clientWidth}
            setSearchWidth={setSearchWidth}
            data={tags}
          >
            <Box
              ref={chipBoxRef}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "8px",
              }}
            >
              {tags?.slice(0, getTagsLimitValue()).map((val) => (
                <Chip
                  classNameProps="search_box_chips"
                  key={val}
                  label={val}
                  Icon={<CloseOutlinedIcon />}
                  closable={() => handleTagRemove(val)}
                />
              ))}
              {tags?.length > getTagsLimitValue() && (
                <Box>
                  <TagTooltip
                    placement="top-start"
                    title={
                      <Box className="tooltip_content">
                        {tags?.slice(getTagsLimitValue())?.map((val, index) => (
                          <Box key={val}>
                            <SullyTypography classNameProps="sideBarTitle">
                              <Chip
                                classNameProps="tooltip_chips"
                                label={val}
                                Icon={<CloseOutlinedIcon />}
                                closable={() => {
                                  handleTagRemove(val);
                                }}
                              />
                            </SullyTypography>
                          </Box>
                        ))}
                      </Box>
                    }
                    arrow
                  >
                    <Box>
                      <Chip
                        classNameProps="more_chip"
                        label={`${tags?.slice(getTagsLimitValue()).length}+ More`}
                      />
                    </Box>
                  </TagTooltip>
                </Box>
              )}
            </Box>
          </TagsAutocomplete>
        </Box>
        <PrimaryButton
          className="medium_btn"
          disabled={!tags?.length}
          onClick={handleSearch}
        >
          Search
        </PrimaryButton>
      </ModelSearchBoxWrapper>
    </>
  );
};

SearchBox.propTypes = {
  tags: PropTypes.array,
  handleTagRemove: PropTypes.func,
  setModels: PropTypes.func,
};

export default SearchBox;
