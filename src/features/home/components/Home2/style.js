import { Box, styled } from "@mui/material";
export const HomeWrapper = styled(Box)`
  padding: 32px;
  /* margin-top: 2.8rem; */

  & .banner {
    padding: 6px 16px;
    margin-left: 1.5rem;
    & .banner_text {
      font-size: 16px;
    }
  }
  & .banner_img {
    width: 52px;
    height: 52px;
    position: absolute;
    top: -2px;
    left: 4px;
    img {
      object-fit: contain;
    }
  }
  & .home_content {
    margin-top: 24px;
  }
  & .stats_cards {
    /* display: flex;
    justify-content: flex-start;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap; */
    margin-top: 2px;
  }
`;
