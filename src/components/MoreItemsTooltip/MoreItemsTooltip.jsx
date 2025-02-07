import { Box } from "@mui/material";
import React from "react";
import { sortAlphabetically } from "utils";
import { ChipTooltip, MoreItemsTooltipWrapper } from "./style";
import { SullyTypography, Chip } from "components";

export default function MoreItemsTooltip({ items, showItemCount }) {
  return (
    <MoreItemsTooltipWrapper className="chips_box">
      {sortAlphabetically(items)
        .slice(0, showItemCount)
        .map((val) => (
          <Chip
            classNameProps="modal_card_chips "
            key={val.name}
            label={val.name}
          />
        ))}
      {!!(items.length > showItemCount) && (
        <ChipTooltip
          placement="top-start"
          title={
            <Box className="tooltip_content">
              {sortAlphabetically(items)
                .slice(showItemCount)
                .map(({ name }) => (
                  <Box key={name}>
                    <SullyTypography classNameProps="sideBarTitle">
                      <Chip classNameProps="tooltip_chips" label={name} />
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
              label={`${items.slice(showItemCount).length}+ More`}
            />
          </Box>
        </ChipTooltip>
      )}
      {!items.length && <Box className="tags_not_available">-</Box>}
    </MoreItemsTooltipWrapper>
  );
}
