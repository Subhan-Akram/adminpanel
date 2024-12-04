import { HomeWrapper } from "../features/home/components/Home2/style";
import { BannerWrapper } from "../styles";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Box, Card, Divider, Grid } from "@mui/material";
import { SullyTypography } from "components";
import { BannerDog } from "assets";
import { styled, Typography } from "@mui/material";
import { ArrowUp, LlmModelIcon } from "../sullyIcons/SullyIcons";
import { AddBusiness, CreditCard } from "@mui/icons-material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { DashboardIcon, SettingIcon, IntegrationIcon } from "sullyIcons";
// import { StatsCard } from "./StatsCard/StatsCard";
const HomePage = () => {
  return (
    <HomeWrapper>
      <BannerWrapper>
        <Box className="banner">
          <Box className="banner_img">
            <img src={BannerDog} />
          </Box>
          <SullyTypography classNameProps="banner_text" variant={"span"}>
            {" "}
            Welcome &nbsp;
          </SullyTypography>
          <SullyTypography
            variant={"span"}
            classNameProps="title_brand text-capitalize"
          >
            Subhan
          </SullyTypography>{" "}
          <SullyTypography classNameProps="banner_text" variant={"span"}>
            , to Sully Admin Panel
          </SullyTypography>
        </Box>
      </BannerWrapper>
      <Box className="home_content">
        <SullyTypography classNameProps="title_lg_brand">
          Overview
        </SullyTypography>
        <Divider sx={{ marginTop: "10px", marginBottom: "12px" }} />
        <Grid container spacing={"10px"} className="stats_cards">
          {data.map(({ title, icon, stats }) => {
            return (
              <Grid item xs={12} sm={3} key={title}>
                {" "}
                <StatsCard icon={icon} title={title} stats={stats}></StatsCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </HomeWrapper>
  );
};

export default HomePage;
export const StatsWrapper = styled(Card)`
  /* width: 100%; */
  /* border: 1px solid red; */
  padding: 0 !important;
  & .header {
    padding: 12px 16px;
    display: flex;
    justify-content: flex-start;
    gap: 6px;
    align-items: center;
  }
  & .content {
    padding: 0 16px;
    margin-top: 10px;
  }
  & .footer {
    padding: 16px;
    margin-top: 12px;
  }
  & .footer_end {
    border-top: 1px solid var(--border-1);
    margin-top: 12px;
    padding: 1rem;
    background-color: var(--surface-l2);
    cursor: pointer;
  }
  &:hover {
    border: 1px solid var(--border-2);
    background: var(--surface-l1);
    box-shadow: -5px 5px 50px 4px rgba(255, 255, 255, 0.05);
    & .card_title {
      text-decoration: underline;
      text-underline-offset: 4px;
      cursor: pointer;
    }
  }
`;

export const StatsCard = ({ icon, title, stats }) => {
  return (
    <StatsWrapper>
      <Box className="header">
        <SullyTypography>{title}</SullyTypography>
        {icon}
      </Box>
      <Box className="content">
        <SullyTypography classNameProps="title_lg">{stats}</SullyTypography>
      </Box>
      {/* <Box className="footer">
        <SullyTypography classNameProps="green_title">
          <ArrowUp /> 20%{" "}
          <SullyTypography variant="span" classNameProps="card_text_2_bold">
            vs last month
          </SullyTypography>
        </SullyTypography>
      </Box> */}
      <Box className="footer_end">
        <SullyTypography variant={"span"} classNameProps="card_subtitle">
          View in Detail
        </SullyTypography>
      </Box>
    </StatsWrapper>
  );
};

export const data = [
  {
    title: "Users",
    stats: "2,240",
    icon: (
      <PeopleAltIcon sx={{ color: "var(--icon-brand)", fontSize: "20px" }} />
    ),
  },
  {
    title: "LLM's Models",
    stats: "1,240",
    icon: (
      <CreditCard
        sx={{
          color: "var(--icon-brand)",
          fontSize: "20px",
        }}
      />
    ),
  },
  {
    title: "Companies",
    stats: "5,240",
    icon: (
      <ApartmentIcon sx={{ color: "var(--icon-brand)", fontSize: "20px" }} />
    ),
  },
  {
    title: "Organization",
    stats: "3,240",
    icon: (
      <CorporateFareIcon
        sx={{ color: "var(--icon-brand)", fontSize: "20px" }}
      />
    ),
  },
  {
    title: "Credits",
    stats: "1,540",
    icon: (
      <CreditCard
        sx={{
          color: "var(--icon-brand)",
          fontSize: "20px",
        }}
      />
    ),
  },
];
