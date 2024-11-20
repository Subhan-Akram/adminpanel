import { Box, Divider, Rating } from "@mui/material";
import { useState } from "react";
import { FeatureComparisionWrapper } from "./style";
import {
  CancelIcon,
  DogBoneEmptyIcon,
  DogBoneIcon,
  RedirectIcon,
} from "sullyIcons";
import { Chip, PrimaryButton, SullyTypography, TextButton } from "components";
import PropTypes from "prop-types";
import { ConfirmModal } from "components";
import { useLocation, useNavigate } from "react-router-dom";
import { ModelSetModal } from "features/integration";
import { useCreateModelSet, useModelIsIntegrated, useRemoveModel } from "hooks";

const FeatureCard = ({ data }) => {
  const { name, createdBy, rating, features, logoUrl, extId } = data;

  const [isModelSetOpen, setIsModelSetOpen] = useState(false);
  const [selectedModelSet, setSelectedModelSet] = useState([]);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const { pathname } = useLocation();
  const splitPaths = pathname.slice(1).split("/");
  const getNavigatePath = `/${splitPaths
    .slice(0, splitPaths.length - 1)
    .join("/")}`;
  const isIntegrated = useModelIsIntegrated(extId);

  const { handleRemoveModel } = useRemoveModel();
  const handleCreateModelSet = useCreateModelSet(getNavigatePath);
  const navigate = useNavigate();
  const handleRemoveModal = () => {
    setIsRemoveModalOpen(true);
  };
  const handleModelPageNavigate = () => {
    navigate(`${getNavigatePath}/model-description/${extId}`);
  };

  const handleRemove = () => {
    handleRemoveModel(extId);
    setIsRemoveModalOpen(false);
  };
  const handleModelSet = () => {
    setSelectedModelSet([data]);
    setIsModelSetOpen(true);
  };

  return (
    <>
      <ModelSetModal
        isModelSetOpen={isModelSetOpen}
        setIsModelSetOpen={setIsModelSetOpen}
        selectedModelSet={selectedModelSet}
        handleClick={handleCreateModelSet}
      />
      <ConfirmModal
        isConfirmModalOpen={isRemoveModalOpen}
        handleSubmit={handleRemove}
        setIsConfirmModalOpen={setIsRemoveModalOpen}
        modelName={name}
      />
      <FeatureComparisionWrapper cancelActive={true}>
        <Box className="cancel_icon" onClick={handleRemoveModal}>
          <CancelIcon />
        </Box>
        {isIntegrated && (
          <Box className="integrated_chips">
            {" "}
            <Chip label={"Integrated"} classNameProps="integrated_chip" />
          </Box>
        )}

        <Box className="logo_box">
          <img src={logoUrl} alt="" />
        </Box>
        <Box className="header">
          <SullyTypography
            variant="h4"
            classNameProps="comparision_title text_underline"
            onClick={handleModelPageNavigate}
          >
            {name}
          </SullyTypography>
          <SullyTypography variant="body1" classNameProps="card_text">
            {createdBy}
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
          <TextButton
            onClick={() => {
              navigate(`${getNavigatePath}/model-description/${extId}`);
            }}
          >
            View More <RedirectIcon />
          </TextButton>
        </Box>

        {isIntegrated ? (
          <PrimaryButton
            className="card_btn_1"
            onClick={() => {
              navigate(`${getNavigatePath}/integration`);
            }}
          >
            View Integration
          </PrimaryButton>
        ) : (
          <PrimaryButton
            className="card_btn_1"
            onClick={() => {
              handleModelSet([extId]);
            }}
          >
            Integrate
          </PrimaryButton>
        )}
        <Divider />
        <Box className="feature_content_box">
          {features?.map((val) => {
            return (
              <Box className="item" key={val.title}>
                <SullyTypography classNameProps="card_title_1">
                  {val.title}
                </SullyTypography>
                <ul>
                  {val.listItems.map((listItem) => (
                    <li key={listItem.title}>
                      <SullyTypography classNameProps="card_title_2">
                        {listItem.title}:
                        {listItem.title === "Calculate" ? (
                          <SullyTypography classNameProps="link" variant="span">
                            Calculate Cost
                          </SullyTypography>
                        ) : (
                          <SullyTypography
                            classNameProps="card_title_3"
                            variant="span"
                          >
                            {listItem.description}
                          </SullyTypography>
                        )}
                      </SullyTypography>
                    </li>
                  ))}
                </ul>
              </Box>
            );
          })}
        </Box>
      </FeatureComparisionWrapper>
    </>
  );
};

FeatureCard.propTypes = {
  index: PropTypes.number,
  data: PropTypes.object,
};
export default FeatureCard;
