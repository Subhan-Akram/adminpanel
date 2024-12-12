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
import { Link, useNavigate } from "react-router-dom";
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
            Welcome
          </SullyTypography>
          <SullyTypography
            variant={"span"}
            classNameProps="title_brand text-capitalize"
          >
            &nbsp;Subhan Akram
          </SullyTypography>{" "}
          <SullyTypography classNameProps="banner_text" variant={"span"}>
            ,to Sully Admin Panel
          </SullyTypography>
        </Box>
      </BannerWrapper>
      <Box className="home_content">
        <SullyTypography classNameProps="medium_title">
          Overview
        </SullyTypography>
        {/* <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} /> */}
        <Grid container spacing={"24px"} className="stats_cards">
          {data.map((val) => {
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

export default HomePage;
export const StatsWrapper = styled(Card)`
  padding: 0 !important;

  & .content {
    padding: 16px;
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    align-items: center;
    /* margin-top: 10px; */
  }
  & .footer {
    padding: 16px;
    margin-top: 12px;
  }
  & .footer_end {
    border-top: 1px solid var(--border-1);
    margin-top: 12px;
    padding: 12px 16px;
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

export const StatsCard = ({ data }) => {
  const { icon, title, stats, link } = data;
  const navigate = useNavigate();

  return (
    <StatsWrapper>
      {/* <Box className="header">
      
        
      </Box> */}
      <Box className="content">
        <Box>{icon}</Box>
        <Box>
          <SullyTypography classNameProps="text_terrtiary_bold ">
            {title}
          </SullyTypography>
          <SullyTypography classNameProps="title_primary_md">
            {stats}
          </SullyTypography>
        </Box>
      </Box>
      <Box
        className="footer_end"
        onClick={() => {
          navigate(link);
        }}
      >
        <SullyTypography variant={"span"} classNameProps="modaltitle1_regular">
          View all
        </SullyTypography>
      </Box>
    </StatsWrapper>
  );
};

export const data = [
  {
    title: "Users",
    stats: "2,240",
    link: "/users",
    icon: (
      <PeopleAltIcon sx={{ color: "var(--text-tertiary)", fontSize: "36px" }} />
    ),
  },
  {
    title: "LLM's Models",
    stats: "1,240",
    link: "/models",
    icon: (
      <CreditCard
        sx={{
          color: "var(--text-tertiary)",
          fontSize: "36px",
        }}
      />
    ),
  },
  {
    title: "Companies",
    stats: "5,240",
    link: "/companies",
    icon: (
      <ApartmentIcon sx={{ color: "var(--text-tertiary)", fontSize: "36px" }} />
    ),
  },
  {
    title: "Organization",
    stats: "3,240",
    link: "/organizations",
    icon: (
      <CorporateFareIcon
        sx={{ color: "var(--text-tertiary)", fontSize: "36px" }}
      />
    ),
  },
  {
    title: "Credits",
    stats: "1,540",
    link: "/",
    icon: (
      <CreditCard sx={{ color: "var(--text-tertiary)", fontSize: "36px" }} />
    ),
  },
];
