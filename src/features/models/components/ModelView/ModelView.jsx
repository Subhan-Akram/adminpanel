import { Box, Grid } from "@mui/material";
import React from "react";
import { Chip, CopyButton, SullyTypography } from "components";
import { ModelViewWrapper } from "./style";
import { ChipTooltip } from "globalStyles";
import ModelFeatures from "../ModelFeatures";

const ModelView = ({ data }) => {
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
    <ModelViewWrapper role="presentation">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <SullyTypography variant="body1" classNameProps={"card_text"}>
            Name
          </SullyTypography>
        </Grid>

        <Grid item xs={12} sm={9}>
          <SullyTypography variant="body2" classNameProps={" modaltitle1"}>
            {name}
          </SullyTypography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <SullyTypography variant="body1" classNameProps={"card_text"}>
            Model Card
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <SullyTypography variant="body2" classNameProps={"modaltitle1"}>
            {modelCard}
          </SullyTypography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <SullyTypography variant="body1" classNameProps={"card_text"}>
            SSBX Code:
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <SullyTypography variant="body2" classNameProps={"modaltitle1"}>
            {ssbxCode}
          </SullyTypography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <SullyTypography variant="body1" classNameProps={"card_text"}>
            Origin URL:
          </SullyTypography>
        </Grid>

        <Grid item xs={12} sm={9}>
          <Box className="text_with_icon">
            <SullyTypography
              variant="body2"
              classNameProps={"modaltitle1 trim_url"}
            >
              {originUrl}
            </SullyTypography>
            <Box>
              <CopyButton title="Origin Url" text={originUrl}></CopyButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <SullyTypography variant="body1" classNameProps={"card_text"}>
            Logo URL:
          </SullyTypography>
        </Grid>

        <Grid item xs={12} sm={9}>
          <Box className="text_with_icon">
            <SullyTypography
              variant="body2"
              classNameProps={"modaltitle1 trim_url"}
            >
              {logoUrl}
            </SullyTypography>
            <Box>
              <CopyButton title="Logo Url" text={logoUrl}></CopyButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={3}>
          <SullyTypography variant="body1" classNameProps={"card_text"}>
            License
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <SullyTypography variant="body2" className="modaltitle1">
            {license ? license : "None"}
          </SullyTypography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <SullyTypography classNameProps="card_text">Rating:</SullyTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <SullyTypography className="modaltitle1" color="text.secondary">
            {rating}
          </SullyTypography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <SullyTypography classNameProps="card_text">
            Description:
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <SullyTypography className="modaltitle1">
            {description}
          </SullyTypography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <SullyTypography classNameProps="card_text">Tags</SullyTypography>
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
              <ChipTooltip
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
              </ChipTooltip>
            ) : (
              ""
            )}
            {!tags.length && <Box className="tags_not_available"></Box>}
          </Box>
        </Grid>
        {/* <Grid item xs={12} sm={12}>
          <SullyTypography classNameProps="card_text">
            Features:
          </SullyTypography>
        </Grid> */}
        {/* <Grid item sm={12} xs={12}>
          <ModelFeatures />
        </Grid> */}
      </Grid>
    </ModelViewWrapper>
  );
};

export default ModelView;
