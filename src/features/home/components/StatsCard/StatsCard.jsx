import { useNavigate } from "react-router-dom";
import { StatsCardWrapper } from "./style";
import { Box } from "@mui/material";
import { SullyTypography } from "components";

const StatsCard = ({ data }) => {
  const { icon, title, stats, link } = data;
  const navigate = useNavigate();

  return (
    <StatsCardWrapper>
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
    </StatsCardWrapper>
  );
};

export default StatsCard;
