import { Box, Grid } from "@mui/material";
import React from "react";
import { Chip, CopyButton, SullyTypography, TagTooltip } from "components";
import { DrawerWrapper } from "./style";
import ModelFeatures from "../ModelFeatures";

const DrawerView = ({ data }) => {
  const {
    name,
    description,
    modelCard,
    rating,
    license,
    logoUrl,
    originUrl,
    ssbxCode,
    tags = [],
  } = data;

  return (
    <DrawerWrapper role="presentation">
      <Grid container sx={{ marginTop: "0rem" }} spacing={3}>
        <Grid item xs={12} sm={3}>
          <SullyTypography
            variant="body1"
            classNameProps={"card_text"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Name
          </SullyTypography>
        </Grid>

        <Grid item xs={12} sm={9}>
          <SullyTypography variant="body2" classNameProps={" modaltitle1"}>
            {name}
          </SullyTypography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <SullyTypography
            variant="body1"
            classNameProps={"card_text"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Model Card
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <SullyTypography variant="body2" classNameProps={"modaltitle1"}>
            {modelCard}
          </SullyTypography>
        </Grid>

        {/* SSBX Code */}
        <Grid item xs={12} sm={3}>
          <SullyTypography
            variant="body1"
            classNameProps={"card_text"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            SSBX Code:
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <SullyTypography variant="body2" classNameProps={"modaltitle1"}>
            {ssbxCode}
          </SullyTypography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <SullyTypography
            variant="body1"
            sx={{ mb: 1, fontWeight: 500 }}
            classNameProps={"card_text"}
          >
            Origin URL:
          </SullyTypography>
        </Grid>

        {/* Origin URL with Ellipsis and Copy Button */}
        <Grid item xs={12} sm={9}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "12px",
            }}
          >
            <SullyTypography
              variant="body2"
              classNameProps={"modaltitle1"}
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "calc(100% - 40px)", // Adjust width to leave room for the button
              }}
            >
              {originUrl}
            </SullyTypography>
            <Box>
              <CopyButton title="Origin Url" text={originUrl}></CopyButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <SullyTypography
            variant="body1"
            sx={{ mb: 1, fontWeight: 500 }}
            classNameProps={"card_text"}
          >
            Logo URL:
          </SullyTypography>
        </Grid>

        {/* Origin URL with Ellipsis and Copy Button */}
        <Grid item xs={12} sm={9}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "12px",
            }}
          >
            <SullyTypography
              variant="body2"
              classNameProps={"modaltitle1"}
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "calc(100% - 40px)",
              }}
            >
              {logoUrl.slice(0, 39)}
            </SullyTypography>
            <Box>
              <CopyButton title="Logo Url" text={logoUrl}></CopyButton>
            </Box>
          </Box>
        </Grid>

        {/* License */}
        <Grid item xs={12} sm={3}>
          <SullyTypography
            variant="body1"
            sx={{ mb: 1, fontWeight: 500 }}
            classNameProps={"card_text"}
          >
            License
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <SullyTypography variant="body2" className="modaltitle1">
            {license ? license : "None"}
          </SullyTypography>
        </Grid>

        {/* Rating */}
        <Grid item xs={12} sm={3}>
          <SullyTypography
            // variant="body1"
            classNameProps="card_text"
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Rating:
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <SullyTypography className="modaltitle1" color="text.secondary">
            {rating}
          </SullyTypography>
        </Grid>

        {/* Description */}
        <Grid item xs={12} sm={3}>
          <SullyTypography
            classNameProps="card_text"
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Description:
          </SullyTypography>
        </Grid>
        <Grid item sx={12} xs={9}>
          <SullyTypography className="modaltitle1">
            {description}
          </SullyTypography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <SullyTypography
            classNameProps="card_text"
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Tags
          </SullyTypography>
        </Grid>
        <Grid item xs={6} sm={9}>
          {!tags.length && "-"}
          <Box className="chips_box">
            {tags.slice(0, 3).map((val) => (
              <Chip
                classNameProps="modal_card_chips "
                key={val.name}
                label={val.name}
              />
            ))}
            {tags.length > 3 ? (
              <TagTooltip
                placement="top-start"
                title={
                  <Box className="tooltip_content">
                    {tags.slice(3).map((val) => (
                      <Box key={val}>
                        <SullyTypography classNameProps="sideBarTitle">
                          <Chip
                            classNameProps="tooltip_chips"
                            label={val.name}
                          />
                        </SullyTypography>
                      </Box>
                    ))}
                  </Box>
                }
                arrow
              >
                <Box>
                  {" "}
                  <Chip
                    classNameProps="modal_card_chips "
                    label={`${tags.slice(3).length}+ More`}
                  />
                </Box>
              </TagTooltip>
            ) : (
              ""
            )}
            {!tags.length && <Box className="tags_not_available"></Box>}
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <SullyTypography
            classNameProps="card_text"
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Features
          </SullyTypography>
        </Grid>
        <Grid item xs={6} sm={9}>
          <ModelFeatures />
        </Grid>
      </Grid>
    </DrawerWrapper>
  );
};

export default DrawerView;
