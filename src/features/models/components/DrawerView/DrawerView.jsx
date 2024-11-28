/* eslint-disable react/prop-types */
import { Box, Grid } from "@mui/material";
import React from "react";
import {
  Chip,
  LogoFrame,
  SullyTypography,
  TagTooltip,
} from "../../../../components";
import { DrawerWrapper } from "./style";
import { fontSize } from "@mui/system";

function DrawerView({ data }) {
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
    // <Box className="drawer_content" role="presentation" sx={{ p: 2 }}>
    //   <Grid container spacing={2}>
    //     {/* Name */}
    //     <Grid item xs={12} sm={6}>
    //       <SullyTypography
    //         variant="body1"
    //         classNameProps={"modaltitle1"}
    //         sx={{ mb: 1, fontWeight: 500 }}
    //       >
    //         Name:
    //       </SullyTypography>
    //       <SullyTypography
    //         variant="body2"
    //         classNameProps={"card_text"}
    //         color="text.secondary"
    //       >
    //         {name}
    //       </SullyTypography>
    //     </Grid>

    //     {/* Model Card */}
    //     <Grid item xs={12} sm={6}>
    //       <SullyTypography
    //         variant="body1"
    //         classNameProps={"modaltitle1"}
    //         sx={{ mb: 1, fontWeight: 500 }}
    //       >
    //         Model Card:
    //       </SullyTypography>
    //       <SullyTypography
    //         variant="body2"
    //         classNameProps={"card_text"}
    //         color="text.secondary"
    //       >
    //         {modelCard}
    //       </SullyTypography>
    //     </Grid>

    //     {/* License */}
    //     <Grid item xs={12} sm={6}>
    //       <SullyTypography
    //         variant="body1"
    //         classNameProps={"modaltitle1"}
    //         sx={{ mb: 1, fontWeight: 500 }}
    //       >
    //         License:
    //       </SullyTypography>
    //       <SullyTypography
    //         variant="body2"
    //         classNameProps={"card_text"}
    //         color="text.secondary"
    //       >
    //         {license}
    //       </SullyTypography>
    //     </Grid>

    //     {/* SSBX Code */}
    //     <Grid item xs={12} sm={6}>
    //       <SullyTypography
    //         variant="body1"
    //         classNameProps={"modaltitle1"}
    //         sx={{ mb: 1, fontWeight: 500 }}
    //       >
    //         SSBX Code:
    //       </SullyTypography>
    //       <SullyTypography
    //         variant="body2"
    //         classNameProps={"card_text"}
    //         color="text.secondary"
    //       >
    //         {ssbxCode}
    //       </SullyTypography>
    //     </Grid>
    //     {/* Logo URL */}
    //     <Grid item xs={12} sm={6}>
    //       <SullyTypography
    //         variant="body1"
    //         classNameProps={"modaltitle1"}
    //         sx={{ mb: 1, fontWeight: 500 }}
    //       >
    //         Logo URL:
    //       </SullyTypography>
    //       <Box className="logo_frame_box">
    //         <LogoFrame
    //           className={"logo_frame_medium"}
    //           imgLink={logoUrl}
    //         ></LogoFrame>
    //       </Box>
    //     </Grid>
    //     {/* Origin URL */}
    //     <Grid item xs={12} sm={6}>
    //       <SullyTypography
    //         variant="body1"
    //         classNameProps={"modaltitle1"}
    //         sx={{ mb: 1, fontWeight: 500 }}
    //       >
    //         Origin URL:
    //       </SullyTypography>
    //       <SullyTypography
    //         variant="body2"
    //         classNameProps={"card_text"}
    //         color="text.secondary"
    //       >
    //         {originUrl}
    //       </SullyTypography>
    //     </Grid>

    //     {/* Rating */}
    //     <Grid item xs={12} sm={6}>
    //       <SullyTypography
    //         variant="body1"
    //         classNameProps={"modaltitle1"}
    //         sx={{ mb: 1, fontWeight: 500 }}
    //       >
    //         Rating:
    //       </SullyTypography>
    //       <SullyTypography
    //         variant="body2"
    //         classNameProps={"card_text"}
    //         color="text.secondary"
    //       >
    //         {rating}
    //       </SullyTypography>
    //     </Grid>
    //     {/* Description */}
    //     <Grid item xs={12} sm={12}>
    //       <SullyTypography
    //         variant="body1"
    //         classNameProps={"modaltitle1"}
    //         sx={{ mb: 1, fontWeight: 500 }}
    //       >
    //         Description:
    //       </SullyTypography>
    //       <SullyTypography
    //         variant="body2"
    //         classNameProps={"card_text"}
    //         color="text.secondary"
    //       >
    //         {description}
    //       </SullyTypography>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <SullyTypography
    //         variant="body1"
    //         classNameProps={"modaltitle1"}
    //         sx={{ mb: 1, fontWeight: 500 }}
    //       >
    //         Tags
    //       </SullyTypography>
    //       <Box className="chips_box">
    //         {tags.slice(0, 3).map((val) => (
    //           <Chip
    //             classNameProps="modal_card_chips "
    //             key={val.name}
    //             label={val.name}
    //           />
    //         ))}
    //         {tags.length > 3 ? (
    //           <TagTooltip
    //             placement="top-start"
    //             title={
    //               <Box className="tooltip_content">
    //                 {tags.slice(3).map((val) => (
    //                   <Box key={val}>
    //                     <SullyTypography classNameProps="sideBarTitle">
    //                       <Chip
    //                         classNameProps="tooltip_chips"
    //                         label={val.name}
    //                       />
    //                     </SullyTypography>
    //                   </Box>
    //                 ))}
    //               </Box>
    //             }
    //             arrow
    //           >
    //             <Box>
    //               {" "}
    //               <Chip
    //                 classNameProps="modal_card_chips "
    //                 label={`${tags.slice(3).length}+ More`}
    //               />
    //             </Box>
    //           </TagTooltip>
    //         ) : (
    //           ""
    //         )}
    //         {!tags.length && <Box className="tags_not_available"></Box>}
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </Box>
    <DrawerWrapper className="drawer_content" role="presentation" sx={{ p: 2 }}>
      <Box className="logo_name">
        <LogoFrame
          className={"logo_frame_drawer"}
          imgLink={logoUrl}
        ></LogoFrame>
        <SullyTypography
          // sx={{ marginTop: "4px", fontSize: "20px !important" }}
          variant="body2"
          classNameProps={"sub_title_1_lg drawer_text"}
        >
          {name}
        </SullyTypography>
      </Box>
      <Grid container sx={{ marginTop: "1rem" }} spacing={3}>
        {/* Name */}

        {/* Model Card */}
        <Grid item xs={12} sm={3}>
          <SullyTypography
            variant="body1"
            classNameProps={"modaltitle1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Model Card
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <SullyTypography
            variant="body2"
            classNameProps={"card_text"}
            color="text.secondary"
          >
            {modelCard}
          </SullyTypography>
        </Grid>

        {/* SSBX Code */}
        <Grid item xs={12} sm={3}>
          <SullyTypography
            variant="body1"
            classNameProps={"modaltitle1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            SSBX Code:
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <SullyTypography
            variant="body2"
            classNameProps={"card_text"}
            color="text.secondary"
          >
            {ssbxCode}
          </SullyTypography>
        </Grid>

        {/* Origin URL */}
        <Grid item xs={12} sm={3}>
          <SullyTypography
            variant="body1"
            classNameProps={"modaltitle1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Origin URL:
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <SullyTypography
            variant="body2"
            classNameProps={"card_text"}
            color="text.secondary"
          >
            {originUrl}
          </SullyTypography>
        </Grid>
        {/* Logo URL */}
        <Grid item xs={12} sm={3}>
          <SullyTypography
            variant="body1"
            classNameProps={"modaltitle1"}
            sx={{ mb: 1, fontWeight: 500, textWrap: "wrap" }}
          >
            Logo URL
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          {/* <LogoFrame
              className={"logo_frame_medium"}
              imgLink={logoUrl}
            ></LogoFrame> */}
          <Box sx={{ width: "100%", overflow: "auto" }}>
            <SullyTypography variant="body2" classNameProps={"card_text"}>
              {logoUrl}
            </SullyTypography>
          </Box>
        </Grid>
        {/* License */}
        <Grid item xs={12} sm={3}>
          <SullyTypography
            variant="body1"
            classNameProps={"modaltitle1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            License
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <SullyTypography
            variant="body2"
            classNameProps={"card_text"}
            color="text.secondary"
          >
            {license}
          </SullyTypography>
        </Grid>
        {/* Rating */}
        <Grid item xs={12} sm={3}>
          <SullyTypography
            variant="body1"
            classNameProps={"modaltitle1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Rating:
          </SullyTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <SullyTypography
            variant="body2"
            classNameProps={"card_text"}
            color="text.secondary"
          >
            {rating}
          </SullyTypography>
        </Grid>
        {/* Description */}
        <Grid item xs={12} sm={12}>
          <SullyTypography
            variant="body1"
            classNameProps={"modaltitle1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Description:
          </SullyTypography>
          <SullyTypography
            variant="body2"
            classNameProps={"card_text"}
            color="text.secondary"
          >
            {description}
          </SullyTypography>
        </Grid>
        <Grid item xs={12}>
          <SullyTypography
            variant="body1"
            classNameProps={"modaltitle1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Tags
          </SullyTypography>
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
      </Grid>
    </DrawerWrapper>
  );
}

export default DrawerView;
