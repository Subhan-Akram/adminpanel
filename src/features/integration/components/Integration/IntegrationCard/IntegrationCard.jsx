import { useState } from "react";
import {
  Chip,
  ConfirmDynamicModal,
  LogoFrame,
  SullyTypography,
  TextButton,
} from "components";
import { IntegrationWrapper, SwitchWrapper } from "./style";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { DeleteIcon } from "sullyIcons";
import { useDispatch, useSelector } from "react-redux";
import { updateModelSet } from "features/integration/services";

const IntegrationCard = ({ aiModelsInSet, modelSetExtId, modelSetName }) => {
  const dispatch = useDispatch();
  const { createModelSetIsLoading } = useSelector((state) => state.integration);
  const [selectedModelToDelete, setSelectedModelToDelete] = useState("");
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [enabledModels, setEnabledModels] = useState(
    aiModelsInSet.reduce((acc, model) => {
      acc[model.extId] = model.enabled;
      return acc;
    }, {}),
  );

  const handleToggleSwitch = (extId) => {
    setEnabledModels((prev) => ({
      ...prev,
      [extId]: !prev[extId],
    }));
  };
  const handleDelete = async () => {
    const { extId } = selectedModelToDelete;
    await dispatch(
      updateModelSet({
        modelSetExtId,
        payload: {
          name: modelSetName,
          modelExtIds: aiModelsInSet
            .filter((models) => models.extId !== extId)
            .map((model) => model.extId),
        },
        dispatch,
      }),
    );
    setIsRemoveModalOpen(false);
  };
  const handleConfirmDeleteOpen = (model) => {
    setIsRemoveModalOpen(true);
    setSelectedModelToDelete(model);
  };
  return (
    <>
      <ConfirmDynamicModal
        isConfirmModalOpen={isRemoveModalOpen}
        handleSubmit={handleDelete}
        setIsConfirmModalOpen={setIsRemoveModalOpen}
        title={`Delete - ${selectedModelToDelete.name}`}
        description={
          <SullyTypography classNameProps="confirm_modal_text">
            Are you sure you want to delete{" "}
            <SullyTypography variant="span" classNameProps="model_name">
              {selectedModelToDelete.name}
            </SullyTypography>{" "}
            from the integration?
          </SullyTypography>
        }
        isLoading={createModelSetIsLoading}
        confirmBtnText="Delete"
      />
      {aiModelsInSet.map(({ name, description, logoUrl, extId }) => (
        <IntegrationWrapper key={extId}>
          <Box key={extId} className="card_header">
            <Box className="content_left">
              <LogoFrame imgLink={logoUrl} />
              <Box
                // onClick={() => {
                //   navigate(`/integration/${name}`, { state: modelSetExtId });
                // }}
                className="title_description"
              >
                <Box className="model_name_chip">
                  <SullyTypography classNameProps="medium_title chip_title">
                    {name}
                  </SullyTypography>
                  <Chip classNameProps="active_chip" label="Active" />
                </Box>
                <SullyTypography classNameProps="card_title_2_regular">
                  {description}
                </SullyTypography>
              </Box>
            </Box>
            <Box className="content_right">
              <Box className="switch" onClick={() => handleToggleSwitch(extId)}>
                <SullyTypography classNameProps="caption">
                  {enabledModels[extId] ? "ON" : "ON"}
                </SullyTypography>
                <SwitchWrapper checked={true} />
              </Box>
              {aiModelsInSet.length > 1 && (
                <Box>
                  <TextButton
                    className="delete_btn"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      handleConfirmDeleteOpen({ name, extId });
                    }}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </IntegrationWrapper>
      ))}
    </>
  );
};

IntegrationCard.propTypes = {
  modelSetName: PropTypes.string,
  aiModelsInSet: PropTypes.array,
  modelSetExtId: PropTypes.string,
};

export default IntegrationCard;
