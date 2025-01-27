import { HomeWrapper } from "./style";
import { Box, Grid } from "@mui/material";
import { Banner, SullyTypography } from "components";
import statsData from "features/home/constants";
import StatsCard from "../StatsCard";
import { useUserInfo } from "hooks";

const Home = () => {
  const name = useUserInfo();
  const text = (
    <>
      <SullyTypography variant={"span"}> Welcome</SullyTypography>
      <SullyTypography
        variant={"span"}
        classNameProps="title_brand text-capitalize"
      >
        &nbsp;{name?.toLowerCase()},
      </SullyTypography>{" "}
      <SullyTypography variant={"span"}>to Sully Admin Panel</SullyTypography>
    </>
  );
  return (
    <HomeWrapper>
      <Banner text={text}></Banner>
      <Box className="home_content">
        <SullyTypography classNameProps="medium_title">
          Overview
        </SullyTypography>
        <Grid container spacing={"24px"} className="stats_cards">
          {statsData.map((val) => {
            return (
              <Grid item xs={12} sm={4} xl={3} key={val.title}>
                {" "}
                <StatsCard data={val}></StatsCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </HomeWrapper>
  );
};

export default Home;
