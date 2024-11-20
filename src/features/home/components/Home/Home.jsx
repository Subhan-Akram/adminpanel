import { useEffect, useRef, useState } from "react";
import { HeroWrapper, HomeWrapper } from "./style";
import { Box, Grid } from "@mui/material";
import { MsgFrame1, CircleDog, DecorationCircle, SullyDog } from "assets";
import { useDispatch, useSelector } from "react-redux";

import { RightIcon } from "sullyIcons";
import { SullyTypography, TagsSkeleton, Chip } from "components";
import { tagsLoaderData } from "features/compare/constants";
import HomeSearch from "./HomeSearch";
import { addModelTag, removeModelTag } from "features/home/slice";
import { getAllModelTags } from "features/home/services";
import { getAllModelSet } from "features/integration/services";

const Home = () => {
  const [contentHeight, setContentHeight] = useState(400);
  const { modelSet } = useSelector((state) => state.integration);

  const {
    user: { name },
  } = useSelector((state) => state.auth);
  const msgFrameRef = useRef(null);
  const dispatch = useDispatch();
  const { allModelTags, tags, isLoading, error } = useSelector(
    (state) => state.home,
  );

  const handleAddModelTags = (tag) => dispatch(addModelTag(tag));
  const handleTagRemove = (tag) => dispatch(removeModelTag(tag));

  useEffect(() => {
    dispatch(getAllModelTags(dispatch));
  }, [dispatch]);

  useEffect(() => {
    const msgFrame = msgFrameRef.current;
    if (!msgFrame) return;
    const resizeObserver = new ResizeObserver(() => {
      const newContentHeight = msgFrame.offsetHeight;
      if (newContentHeight !== contentHeight) {
        setContentHeight(newContentHeight);
      }
    });

    resizeObserver.observe(msgFrame);

    return () => {
      resizeObserver.unobserve(msgFrame);
      resizeObserver.disconnect();
    };
  }, [contentHeight]);

  useEffect(() => {
    if (!modelSet.length) dispatch(getAllModelSet());
  }, [dispatch, modelSet.length]);

  return (
    <HomeWrapper>
      <Box className="home_content">
        <HeroWrapper contentHeight={contentHeight}>
          <Box sx={{}}>
            <Box className="hero_content_container">
              <Box className="hero_content1" ref={msgFrameRef}>
                <SullyTypography classNameProps="title1 title_lg" variant="h2">
                  Hi,{" "}
                  <SullyTypography
                    variant={"span"}
                    classNameProps="text-capitalize"
                  >
                    {name?.toLowerCase()}
                  </SullyTypography>{" "}
                  👋, I am{" "}
                  <SullyTypography
                    variant="span"
                    classNameProps="title_lg_brand"
                  >
                    Sully
                  </SullyTypography>
                </SullyTypography>
                <Grid item xs={11}>
                  {" "}
                  <SullyTypography classNameProps="title2 title_medium">
                    I Will help you in curating the right AI Tools for your
                    business
                  </SullyTypography>
                </Grid>
                <Box className="search_label">
                  <SullyTypography
                    classNameProps="search_keyword_text text_terrtiary_regular"
                    variant={"body1"}
                  >
                    Search Your Problem Keywords
                  </SullyTypography>
                </Box>
                <Box className="search_box search_box_1">
                  <HomeSearch />
                </Box>
                <Box className="model_tags">
                  {error ? (
                    <></>
                  ) : isLoading || !allModelTags.length ? (
                    tagsLoaderData.map((val, i) => <TagsSkeleton key={val} />)
                  ) : (
                    allModelTags.map((modelItem) => {
                      const isActive = tags.some(
                        (val) => val === modelItem.name,
                      );
                      return (
                        <Chip
                          closable={isActive ? () => {} : null}
                          key={modelItem.name}
                          label={modelItem.name}
                          classNameProps={`${isActive ? "home_chip_active" : ""} home_chips`}
                          Icon={<RightIcon />}
                          onClick={() => {
                            isActive
                              ? handleTagRemove(modelItem.name)
                              : handleAddModelTags(modelItem.name);
                          }}
                        />
                      );
                    })
                  )}
                </Box>
              </Box>
              <Box className="bg_message_frame">
                <img src={MsgFrame1} alt="" />
              </Box>

              <Box className="message_dog">
                <img src={SullyDog} alt="" />
              </Box>
              <Box className="circle_dog">
                <img src={CircleDog} alt="" />
              </Box>
            </Box>
          </Box>
          <Box className="left_decoration">
            <img src={DecorationCircle} alt="" />
          </Box>
          <Box className="right_decoration">
            <img src={DecorationCircle} alt="" />
          </Box>
        </HeroWrapper>
      </Box>
    </HomeWrapper>
  );
};

export default Home;
