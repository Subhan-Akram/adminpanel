import { Box, styled } from "@mui/material";
import { SkyBg } from "assets";
export const HomeWrapper = styled(Box)(() => ({
  overflowY: "hidden",
  position: "relative",
  height: "100%",
  backgroundImage: `url(${SkyBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${SkyBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: -1,
  },

  "& .home_content": {
    position: "relative",
    minHeight: "520px",
  },
}));
export const HeroWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== "contentHeight",
})(({ theme, contentHeight }) => ({
  overflow: "hidden",
  boxSizing: "border-box",
  height: "calc(100vh - 62px)",
  "& .hero_content_container": {
    position: "relative",
    width: "78%",
    height: "60vh",
    minHeight: `calc(${contentHeight}px + 35px)`,
    marginTop: "60px",
    marginLeft: "54px",
  },
  "& .bg_message_frame": {
    width: "100%",
    height: "100%",
  },
  "& .message_dog": {
    position: "absolute",
    bottom: "-29.5vh",
    right: "-27.5%",
    width: "42.5%",
    height: "52vh",
    objectFit: "contain",
  },

  "& .hero_content1": {
    position: "absolute",
    left: "60px",
    top: "44px",
    paddingBottom: "49px",
    width: "80%",
    "& .search_box_1": {
      maxWidth: "820px",
    },
    "&  .title2": {
      position: "relative",
      marginTop: "24px",
      textTransform: "capitalize;",
      textWrap: "wrap",
    },
    "&  .subtitle": {
      zIndex: "20",
    },
    "& .model_tags": {
      marginTop: "24px",
      position: "relative",
      zIndex: "50",
      display: "flex",
      justifyContent: "flex-start",
      gap: "16px",
      flexWrap: "wrap",
      width: "100%",
    },
    "& .search_label": {
      margin: "32px 0 16px 0",
      position: "relative",
      zIndex: "20",
    },
    [theme.breakpoints.up("xl")]: {
      left: "72px",
      "& .search_label": {
        marginBottom: "32px",
        marginTop: "44px",
      },
      "& .model_tags": {
        marginTop: "32px",
      },
      "&  .title2": {
        fontSize: "clamp(32px, 4vw, 32px)",
      },
      "&  .title1": {
        fontSize: "clamp(36px, 4vw, 42px)",
      },
      "&  .subtitle": {
        fontSize: "clamp(25px, 4vw, 22px)",
      },

      "& .search_box_1": {
        maxWidth: "1000px",
      },
    },
  },

  "@media (min-width: 1550px)": {
    "& .message_dog": {
      bottom: "-39vh",
      height: "66vh",
    },
    "& .hero_content1": {
      top: "65px",
    },
  },
  "@media (max-width: 1500px)": {
    // border: "1px solid red",
  },

  "@media (max-width: 1230px)": {
    "& .message_dog": {
      bottom: contentHeight > 497 ? "-19.5vh" : "-29.5vh",
      height: contentHeight > 497 ? "43vh" : "52vh",
    },
  },
  "@media (min-width: 2000px)": {
    "& .hero_content1": {
      position: "absolute",
      top: "11%",
      left: "60px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      paddingBottom: "49px",
      width: "80%",
      "& .search_label": {
        marginBottom: "32px",
        marginTop: "44px",
      },
      "& .model_tags": {
        marginTop: "44px",
        "& .home_chips": {
          padding: "1rem 3rem",
          fontSize: "28px",
        },
      },
      "&  .title2": {
        fontSize: "clamp(36px, 4vw, 50px)",
        marginTop: "44px",
      },
      "&  .title1": {
        fontSize: "clamp(38px, 5vw, 64px)",
      },
      "&  .search_keyword_text": {
        fontSize: "clamp(25px, 4vw, 40px)",
      },

      "& .search_box_1": {
        maxWidth: "1470px",
        "& .searches": {
          height: "80px",
        },
      },
    },
  },

  "@media (max-height: 695px)": {
    "& .hero_content_container": {
      "& .title2": {
        fontSize: "27px !important",
      },
    },
    "& .message_dog": {
      bottom: "-24vh",
      right: "-29.5%",
      width: "45.5%",
      height: "48vh",
    },
  },
  // "@media (min-height: 790px)": {
  //   "& .hero_content1": {
  //     top: "6vh",
  //   },
  // },
  "& .home_search_box": {
    marginTop: "24px",
    width: "100%",
    "& .search_label": {
      marginBottom: "24px",
      position: "relative",
      zIndex: "20",
    },
  },
  "& .circle_dog": {
    position: "absolute",
    bottom: "-19%",
    display: "flex",
    justifyContent: "center",
    left: "38%",
    height: "363px",
    zIndex: "20",
  },
  "& .left_decoration": {
    position: "absolute",
    bottom: "3vh",
    left: "0",
    rotate: "180deg",
  },
  "& .right_decoration": { position: "absolute", top: "5vh", right: "0" },
  "@media screen and (max-width:1024px)": {
    height: "calc(100vh - 26px)",
  },

  "@media screen and (max-width:1024px and max-height:1024px)": {
    "& .hero_content_container": {
      marginTop: "76px",
    },

    "& .hero_content1 ": {
      width: "85%",
      left: "39px",
      top: "32px",
      "& .search_label": {
        margin: "16px 0",
      },
    },
  },
  "@media screen and (min-width: 820px) and (max-width: 1024px) and (min-height: 1024px)":
    {
      height: "calc(100vh - 26px)",
      "& .hero_content_container": {
        width: "90%",
        marginLeft: "5.4%",
        height: `calc(${contentHeight}px + 80px)`,
        marginTop: "112px",
        // minHeight: `calc(${contentHeight}px + 35px)`,
      },
      "& .hero_content1 ": {
        left: "35px",
        top: "70px",
      },
      "& .message_dog ": {
        bottom: "-48.5vh",
        right: "-11.5%",
        height: "52vh",
        width: "56.5%",
        // height: "374px",
      },
    },
  "@media screen and (max-width: 830px) and (max-height: 1024px)": {
    "& .hero_content_container": {
      width: "90%",
      marginLeft: "5.4%",
      height: "calc(46vh + 32px)",
    },
    "& .hero_content1 ": {
      left: "35px",
    },
    "& .message_dog ": {
      bottom: "-48.5vh",
      right: "-11.5%",
      height: "52vh",
      width: "56.5%",
      // height: "374px",
    },
  },
}));
