import { useEffect, useRef, useState } from "react";
import { HeroWrapper, HomeWrapper } from "./style";
import { Box, Grid } from "@mui/material";
import { MsgFrame1, CircleDog, DecorationCircle, SullyDog } from "assets";
import { useSelector } from "react-redux";
import { SullyTypography } from "components";

const Home = () => {
  const [contentHeight, setContentHeight] = useState(400);

  const {
    user: { name },
  } = useSelector((state) => state.auth);
  const msgFrameRef = useRef(null);

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
                    Welcome to Admin Panel
                  </SullyTypography>
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
