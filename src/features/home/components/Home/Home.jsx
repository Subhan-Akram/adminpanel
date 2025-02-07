import { HomeWrapper } from "./style";
import { Box, Grid } from "@mui/material";
import { Banner, Spin, SullyTypography } from "components";
import StatsCard from "../StatsCard";
import { useUserInfo } from "hooks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "features/home/services";

const Home = () => {
  const dispatch = useDispatch();
  const { stats, isLoading } = useSelector((state) => state.home);
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
  const handleGetStats = () => {
    dispatch(getStats({ dispatch }));
  };
  useEffect(() => {
    handleGetStats();
  }, []);
  return (
    <HomeWrapper>
      <Spin loading={isLoading} />
      <Banner text={text}></Banner>
      <Box className="home_content">
        <SullyTypography classNameProps="medium_title">
          Overview
        </SullyTypography>
        <Grid container spacing={"24px"} className="stats_cards">
          {stats.map((val) => {
            return (
              <Grid item xs={12} sm={4} xl={3} key={val.title}>
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
