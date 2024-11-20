import { Box, Divider, Rating } from "@mui/material";
import { PriceComparisionWrapper } from "./Style";
import { DogBoneEmptyIcon, DogBoneIcon, GemniIcon } from "sullyIcons";
import { OutlinedButton, SullyTypography } from "components";

const PriceComparision = () => {
  return (
    <PriceComparisionWrapper>
      <Box className="logo_box">
        <Box className="logo_frame">
          <GemniIcon />
        </Box>
      </Box>
      <Box className="header">
        <SullyTypography
          variant="h4"
          classNameProps="text_underline text_underline_offset"
        >
          Gemni
        </SullyTypography>
        <SullyTypography variant="body1" classNameProps="text-primary-5">
          Created By Google
        </SullyTypography>
        <Box className="rating">
          {" "}
          <SullyTypography variant="body1" classNameProps="">
            4.O{" "}
          </SullyTypography>
          <Rating
            icon={<DogBoneIcon />}
            emptyIcon={<DogBoneEmptyIcon fontSize="inherit" />}
            fontSize="inherit"
            name="read-only"
            value={2}
            readOnly
          />
        </Box>
        <Box>
          {" "}
          <OutlinedButton sx={{ width: "100%" }}>Integarte</OutlinedButton>
        </Box>
      </Box>
      <Divider />
    </PriceComparisionWrapper>
  );
};

export default PriceComparision;
