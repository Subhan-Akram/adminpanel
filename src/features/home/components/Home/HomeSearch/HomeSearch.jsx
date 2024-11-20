import { Box } from "@mui/material";
import { SearchWrapper } from "./style";
import {
  Chip,
  PrimaryButton,
  SullyTypography,
  TagsAutocomplete,
} from "components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { setCollectionByName } from "features/home/slice";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { TagTooltip } from "components/TagsAutoComplete/style";
import { removeModelTag } from "features/home/slice";
import { resetComparisonData, clearPromptData } from "features/compare";

const HomeSearch = () => {
  const [searchWidth, setSearchWidth] = useState(0);
  const { tags } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const searchBoxRef = useRef(null);
  const chipBoxRef = useRef(null);
  const dispatch = useDispatch();

  const handleTagRemove = (tag) => dispatch(removeModelTag(tag));

  const handleSearch = () => {
    sessionStorage.setItem("tags", JSON.stringify(tags));
    dispatch(clearPromptData());
    navigate("/home/models");
  };
  const getTagsLimitValue = () => {
    if (searchWidth > 840) return 5;
    if (searchWidth > 800) return 4;
    if (searchWidth > 610) return 3;
    if (searchWidth < 610 && searchWidth > 434) return 2;
    if (searchWidth < 434) return 1;
  };

  useEffect(() => {
    sessionStorage.removeItem("tags");
    dispatch(resetComparisonData());
    dispatch(setCollectionByName({ name: "tags", data: [] }));
  }, [dispatch]);

  return (
    <>
      <SearchWrapper ref={searchBoxRef} className="searches">
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
          disabled={!tags.length}
          onClick={handleSearch}
        >
          Search
        </PrimaryButton>
      </SearchWrapper>
    </>
  );
};

export default HomeSearch;
