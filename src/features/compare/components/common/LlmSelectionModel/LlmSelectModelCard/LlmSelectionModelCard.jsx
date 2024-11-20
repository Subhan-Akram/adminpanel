import { Box, Checkbox, Divider, Rating } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { LlmSelectionModelCardWrapper } from "./style";
import { Chip, OutlinedButton, SullyTypography } from "components";
import { CloseIcon, DogBoneEmptyIcon, DogBoneIcon } from "sullyIcons";
import PropTypes from "prop-types";
import { TagTooltip } from "components/SearchBox/style";
import { useModelIsIntegrated } from "hooks";

const LlmSelectionModelCard = ({
  data,
  active,
  addBtn,
  removeBtn,
  isIntegratedCard = false,
}) => {
  const { name, modelCard, rating, description, tags, logoUrl, extId } = data;

  const isIntegrated = useModelIsIntegrated(extId);
  const handleModelToggle = () => {
    if (active) {
      removeBtn.action(extId);
    } else {
      addBtn.action(data);
    }
  };
  const showCheckBox = !isIntegratedCard || (isIntegratedCard && !isIntegrated);
  return (
    <LlmSelectionModelCardWrapper className={`${active ? "active_card" : ""}`}>
      {showCheckBox && (
        <Box className="checkbox">
          <Checkbox checked={active} onChange={handleModelToggle} />
        </Box>
      )}

      <Box className="header">
        <Box className="logo_frame">
          <img alt="" src={logoUrl} />
        </Box>
        <Box className="header_right">
          <SullyTypography variant="h4" classNameProps="card_title_1">
            {name}
          </SullyTypography>
          <SullyTypography variant="body1" classNameProps="card_subtitle">
            {modelCard}
          </SullyTypography>
          <Box className="rating_box">
            <Box className="rating">
              {" "}
              <SullyTypography variant="body1" classNameProps="card_text_2">
                {rating}
              </SullyTypography>
              <Rating
                icon={<DogBoneIcon />}
                emptyIcon={<DogBoneEmptyIcon fontSize="inherit" />}
                fontSize="inherit"
                name="read-only"
                value={rating}
                readOnly
              />
            </Box>
            {isIntegrated ? (
              <Box className="integrated_chips">
                {" "}
                <Chip label={"Integrated"} classNameProps="integrated_chip" />
              </Box>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box className="card_content">
        <SullyTypography classNameProps="card_text" variant="body2">
          {description}
        </SullyTypography>
        <Box className="chips_box">
          {tags.slice(0, 2).map((val, index) => (
            <Chip
              classNameProps="modal_card_chips "
              key={`${val.name}-${index}`}
              label={val.name}
            />
          ))}
          {tags.length > 2 && (
            <TagTooltip
              placement="top-start"
              title={
                <Box className="tooltip_content">
                  {tags.slice(2).map((val, index) => (
                    <Box key={`${val.name}-${index}`}>
                      <SullyTypography classNameProps="sideBarTitle">
                        <Chip classNameProps="tooltip_chips" label={val.name} />
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
                  label={`${tags.slice(2).length}+ More`}
                />
              </Box>
            </TagTooltip>
          )}
        </Box>

        {!isIntegratedCard ? (
          <Box className="btn_groups">
            {active ? (
              <OutlinedButton
                className="bg_surface sideBarTitle"
                variant="contained"
                onClick={() => {
                  removeBtn.action(extId);
                }}
              >
                {removeBtn.text}
                <CloseIcon />
              </OutlinedButton>
            ) : (
              <OutlinedButton
                startIcon={<AddIcon />}
                variant="contained"
                onClick={() => {
                  addBtn.action(data);
                }}
              >
                {addBtn.text}
              </OutlinedButton>
            )}
          </Box>
        ) : (
          <Box className="btn_groups">
            <OutlinedButton
              startIcon={<AddIcon />}
              variant="contained"
              disabled={isIntegrated}
              onClick={() => {
                addBtn.action(data);
              }}
            >
              Add Integration
            </OutlinedButton>
          </Box>
        )}
      </Box>
    </LlmSelectionModelCardWrapper>
  );
};

LlmSelectionModelCard.propTypes = {
  data: PropTypes.object,
  active: PropTypes.bool,
  addBtn: PropTypes.object,
  removeBtn: PropTypes.object,
  isIntegratedCard: PropTypes.bool,
};

export default LlmSelectionModelCard;
