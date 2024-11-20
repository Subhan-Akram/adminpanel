import { Box } from "@mui/material";
import { ModelHeaderWrapper } from "./style";
import { CancelIcon, IntegrationDropdownIcon, ViewIcon } from "sullyIcons";
import {
  Chip,
  ConfirmModal,
  DropDown,
  LogoFrame,
  PromptModelCardSkeleton,
  SullyTypography,
} from "components";
import PropTypes from "prop-types";
import { useCreateModelSet, useModelIsIntegrated } from "hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { removeModelPromptData } from "features/compare/slice";
import { getPromptModelName } from "features/compare/utils";
import { ModelSetModal } from "features/integration";
import { removeSelectedModel } from "features/models";
import { removeComparisionData } from "features/compare/slice";

function SelectedModelHeader({ model }) {
  const { logoUrl, name, extId } = model;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    getModelLoading,
    chatLoading,
    tryPrompt: { promptData },
    promptData: comparePromptData,
  } = useSelector((state) => state.compare);
  const [cardWidth, setCardWidth] = useState(200);
  const [selectedModelSet, setSelectedModelSet] = useState([]);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isModelSetOpen, setIsModelSetOpen] = useState(false);

  const cardRef = useRef();
  const splitPaths = pathname.slice(1).split("/");
  const getNavigatePath = `/${splitPaths
    .slice(0, splitPaths.length - 1)
    .join("/")}`;

  const handleCreateModelSet = useCreateModelSet(getNavigatePath);

  const dispatch = useDispatch();
  const isIntegrated = useModelIsIntegrated(extId);
  const isTryPrompt = pathname.includes("/try-prompt");
  const handleRemoveModal = () => {
    setIsRemoveModalOpen(true);
  };
  const handleModelSet = () => {
    setSelectedModelSet([model]);
    setIsModelSetOpen(true);
  };
  const modelDropDownItems = (isIntegrated) => {
    return isIntegrated
      ? [
          {
            label: "View Integartion",
            icon: <ViewIcon />,
            onClick: () => {
              navigate(`${getNavigatePath}/integration`);
            },
          },
        ]
      : [
          {
            label: "Integrate",
            icon: <IntegrationDropdownIcon />,
            onClick: handleModelSet,
          },
        ];
  };

  // const handleRemove = () => {
  //   dispatch(removeCompareModel({ removeSelectedModel: model }));
  //   dispatch(removeModelPromptData(getPromptModelName(extId)));
  //   setIsRemoveModalOpen(false);
  // };
  const handleRemove = () => {
    dispatch(removeSelectedModel(extId));
    dispatch(removeComparisionData(extId));
    dispatch(removeModelPromptData(getPromptModelName(extId)));
    setIsRemoveModalOpen(false);
  };
  useEffect(() => {
    const cardCurrent = cardRef.current;
    if (!cardCurrent) return;
    const resizeObserver = new ResizeObserver(() => {
      const newContentHeight = cardCurrent.offsetWidth;
      if (newContentHeight !== cardWidth) {
        setCardWidth(newContentHeight);
      }
    });

    resizeObserver.observe(cardCurrent);

    return () => {
      resizeObserver.unobserve(cardCurrent);
      resizeObserver.disconnect();
    };
  }, [cardWidth]);
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
      <ModelHeaderWrapper
        isPromptAvailable={
          (isTryPrompt ? !!promptData.length : comparePromptData.length) ||
          chatLoading
        }
        ref={cardRef}
        cardWidth={cardWidth}
      >
        {!isTryPrompt && (
          <Box className="cancel_icon" onClick={handleRemoveModal}>
            <CancelIcon />
          </Box>
        )}
        {getModelLoading && <PromptModelCardSkeleton />}
        {!getModelLoading && (
          <Box className="model_compare_header">
            <Box className="model_compare_header_left">
              <LogoFrame
                imgLink={logoUrl}
                className="logo_frame_small"
              ></LogoFrame>
              <SullyTypography classNameProps="page_title model_name_compare">
                {" "}
                {name}
              </SullyTypography>
              {isIntegrated ? (
                <Box className="integrated_chips">
                  {" "}
                  <Chip label={"Integrated"} classNameProps="integrated_chip" />
                </Box>
              ) : (
                ""
              )}
            </Box>
            {!isTryPrompt && (
              <DropDown
                className="show_only_icon"
                menuItems={modelDropDownItems(isIntegrated)}
              />
            )}
          </Box>
        )}
      </ModelHeaderWrapper>
    </>
  );
}

SelectedModelHeader.propTypes = {
  model: PropTypes.object,
};

export default SelectedModelHeader;
