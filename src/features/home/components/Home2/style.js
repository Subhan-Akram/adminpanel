import { Box, styled } from "@mui/material";
export const HomeWrapper = styled(Box)`
  /* border: 1px solid red; */
  padding: 1rem;
  margin-top: 2.8rem;

  & .banner {
    padding: 1rem;
    margin-left: 1.5rem;
    & .banner_text {
      font-size: 1.2rem;
    }
  }
  & .banner_img {
    width: 52px;
    height: 52px;
    position: absolute;
    top: 6px;
    left: 4px;
    img {
      object-fit: contain;
    }
  }
  & .home_content {
    margin-top: 2rem;
  }
  & .stats_cards {
    /* display: flex;
    justify-content: flex-start;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap; */
    margin-top: 1rem;
  }
`;
