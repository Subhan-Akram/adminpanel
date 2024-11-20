import { useDispatch } from "react-redux";
import { ModelCardWrapper } from "./style";
import { Box, Checkbox, Divider, Rating } from "@mui/material";
import PropTypes from "prop-types";
import {
  Chip,
  DropDown,
  OutlinedButton,
  PrimaryButton,
  SullyTypography,
} from "components";
import {
  CloseIcon,
  DogBoneEmptyIcon,
  DogBoneIcon,
  IntegrationDropdownIcon,
  ViewIcon,
} from "sullyIcons";
import AddIcon from "@mui/icons-material/Add";
import { TagTooltip } from "components";
import { ModelSetModal } from "features/integration";
import { useState } from "react";
import { useCreateModelSet, useIsModelSelected, useRemoveModel } from "hooks";
import { useNavigate } from "react-router-dom";
import { sortAlphabetically } from "utils";
import { addSelectedModel } from "features/models/slice";

const ModelCard = ({ data, active, isIntegrated }) => {
  const { name, modelCard, rating, description, tags, logoUrl, extId } = data;
  const navigate = useNavigate();
  useRemoveModel(extId);

  const [isModelSetOpen, setIsModelSetOpen] = useState(false);

  const { handleRemoveModel } = useRemoveModel();
  const { selectedModelCount } = useIsModelSelected();
  const handleCreateModelSet = useCreateModelSet("/home/models");
  const dispatch = useDispatch();

  const handleModelSet = () => {
    setIsModelSetOpen(true);
  };

  const onClickPrompt = (model) => {
    navigate(`/home/models/try-prompt/${extId}`);
  };

  const onDropDownClick = () => {
    if (!isIntegrated) return handleModelSet();
    navigate(`/home/models/integration`);
  };

  const addModelToComparison = (model) => {
    if (selectedModelCount === 3) return;
    dispatch(addSelectedModel(model));
  };

  const handleModelSelection = () => {
    if (!active) return addModelToComparison(data);
    return handleRemoveModel(extId);
  };
  const handleModelPageNavigate = () => {
    navigate(`/home/models/model-description/${extId}`);
  };
  const modelDropDownItems = (isIntegrated) => {
    return isIntegrated
      ? [
          {
            label: "View Details",
            icon: <ViewIcon />,
            onClick: () => {
              navigate(`/home/models/model-description/${extId}`);
            },
          },
          {
            label: "View Integartion",
            icon: <ViewIcon />,
            onClick: () => {
              navigate(`/home/models/integration`);
            },
          },
        ]
      : [
          {
            label: "View Details",
            icon: <ViewIcon />,
            onClick: handleModelPageNavigate,
          },
          {
            label: "Integrate",
            icon: <IntegrationDropdownIcon />,
            onClick: handleModelSet,
          },
        ];
  };

  return (
    <>
      <ModelSetModal
        isModelSetOpen={isModelSetOpen}
        setIsModelSetOpen={setIsModelSetOpen}
        selectedModelSet={[data]}
        handleClick={handleCreateModelSet}
      />
      <ModelCardWrapper className={`${active ? "active_card" : ""}`}>
        <Box className="logo_box">
          <Box className="logo_frame">
            <img
              src={logoUrl}
              style={{ objectFit: "contain", color: "white" }}
              alt=""
            />
          </Box>
        </Box>
        <Box className="checkbox">
          <Checkbox
            checked={active}
            onChange={() => handleModelSelection(data)}
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
        <Box className="header">
          <SullyTypography
            onClick={handleModelPageNavigate}
            variant="h4"
            classNameProps="card_title"
          >
            {name}
          </SullyTypography>
          <SullyTypography variant="body1" classNameProps="text-primary-5">
            {modelCard}
          </SullyTypography>
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
              precision={0.5}
              value={rating}
              readOnly
            />
          </Box>
        </Box>
        <Divider />
        <Box className="card_content">
          <SullyTypography classNameProps="card_text " variant="body2">
            {description}
          </SullyTypography>

          <Box className="chips_box">
            {sortAlphabetically(tags)
              .slice(0, 2)
              .map((val) => (
                <Chip
                  classNameProps="modal_card_chips "
                  key={val.name}
                  label={val.name}
                />
              ))}
            {tags.length > 2 ? (
              <TagTooltip
                placement="top-start"
                title={
                  <Box className="tooltip_content">
                    {sortAlphabetically(tags)
                      .slice(2)
                      .map((val, index) => (
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
                    label={`${tags.slice(2).length}+ More`}
                  />
                </Box>
              </TagTooltip>
            ) : (
              ""
            )}
            {!tags.length && <Box className="tags_not_available"></Box>}
          </Box>

          <Box className="btn_groups">
            <Box className="btn_inner_group">
              <PrimaryButton
                onClick={() => onClickPrompt(data)}
                className="primary_1"
                variant="contained"
              >
                Try Prompt
              </PrimaryButton>

              <DropDown
                menuItems={modelDropDownItems(isIntegrated, onDropDownClick)}
              />
            </Box>

            {active ? (
              <OutlinedButton
                className="sideBarTitle bg_surface"
                variant="contained"
                onClick={() => handleRemoveModel(extId)}
              >
                Remove From Comparision
                <CloseIcon />
              </OutlinedButton>
            ) : (
              <OutlinedButton
                startIcon={<AddIcon />}
                variant="contained"
                onClick={() => handleModelSelection(data)}
              >
                Add To Comparision
              </OutlinedButton>
            )}
          </Box>
        </Box>
      </ModelCardWrapper>
    </>
  );
};

ModelCard.propTypes = {
  data: PropTypes.object,
  active: PropTypes.bool,
  isIntegrated: PropTypes.bool,
  modelsCollection: PropTypes.array,
};

export default ModelCard;
