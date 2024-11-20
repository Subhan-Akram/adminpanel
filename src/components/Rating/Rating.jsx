import { Rating } from "@mui/material";
import SullyTypography from "components/SullyTypography";
import { DogBoneEmptyIcon, DogBoneIcon } from "sullyIcons";
import PropTypes from "prop-types";
import { RatingWrapper } from "./style";

export default function RatingComponent({ rating }) {
  return (
    <RatingWrapper>
      <SullyTypography variant="body1" classNameProps="card_text_2">
        {rating}
      </SullyTypography>
      <Rating
        icon={<DogBoneIcon />}
        emptyIcon={<DogBoneEmptyIcon fontSize="inherit" />}
        fontSize="inherit"
        name="read-only"
        precision={0.5}
        value={rating}
        readOnly
      />
    </RatingWrapper>
  );
}

RatingComponent.propTypes = {
  rating: PropTypes.number,
};
