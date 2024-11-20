/* eslint-disable no-debugger */
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { LlmModelWrapper } from "./style";
import PropTypes from "prop-types";
import { Box, Grid, IconButton } from "@mui/material";
import { CloseIcon, RightIcon } from "sullyIcons";
import {
  Chip,
  ModalCardSkeleton,
  OutlinedButton,
  PrimaryButton,
  SearchBox,
  SullyTypography,
  TagsSkeleton,
  ZeroStateComponent,
} from "components";
import { useDispatch, useSelector } from "react-redux";
import { getAllModelTags } from "features/home";
import { getModelNames } from "utils";
import { useEffect } from "react";
import LlmSelectionModelCard from "./LlmSelectModelCard";
import { tagsLoaderData } from "features/compare/constants";
import { addSelectedModel } from "features/models";
import { getFearureComparison } from "features/compare/services";
import { setSearchDone } from "features/home";
import { useIsModelSelected, useRemoveModel } from "hooks";
import { addModelTag } from "features/home";
import { removeModelTag } from "features/home";
import { setCollectionByName } from "features/home";
import { removeModels } from "features/models/slice";

export default function LlmModelsModal({ isLlmModalOpen, setIsLlmModalOpen }) {
  const dispatch = useDispatch();

  const { error: integrationError } = useSelector((state) => state.integration);
  const { isModeSelected, selectedModelCount, totalSelectedModels } =
    useIsModelSelected();
  const {
    allModelTags,
    isLoading: tagsLoading,
    error,
    isSearchDone,
  } = useSelector((state) => state.home);
  const {
    selectedModels,
    modalModels,
    isLoading: modelsLoading,
  } = useSelector((state) => state.models);
  const { isLoading: featureLoading } = useSelector((state) => state.compare);
  const { tags } = useSelector((state) => state.home);
  const isFetchModels = isLlmModalOpen && !allModelTags.length;
  const { handleRemoveModel } = useRemoveModel();
  const handleAddTags = (tag) => dispatch(addModelTag(tag));
  const handleTagRemove = (tag) => dispatch(removeModelTag(tag));
  const handleClose = () => {
    setIsLlmModalOpen(false);
    setTimeout(() => {
      dispatch(removeModels());
      dispatch(setCollectionByName({ name: "tags", data: [] }));
      dispatch(setSearchDone(false));
    }, 200);
  };

  const handleComparision = async () => {
    await dispatch(
      getFearureComparison({
        models: totalSelectedModels,
        dispatch,
      }),
    );
    handleClose();
  };

  const addModelToComparison = (model) => {
    if (selectedModelCount === 3) return;
    dispatch(addSelectedModel(model));
  };
  const isShowTagLoader = tagsLoading && !allModelTags.length;
  const isShowZeroState = !modelsLoading && isSearchDone && !modalModels.length;
  const isShowModels =
    !!modalModels.length && !error && !integrationError && !modelsLoading;
  const isCardsLoading = modelsLoading && !error && !integrationError;

  useEffect(() => {
    if (isFetchModels) dispatch(getAllModelTags(dispatch));
  }, [dispatch, isFetchModels]);

  return (
    <>
      <LlmModelWrapper
        open={isLlmModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={"lg"}
      >
        <DialogTitle id="customized-dialog-title">
          <SullyTypography classNameProps="modal_title">
            Add LLM Model
          </SullyTypography>
          <Box className="model_title_box">
            <SullyTypography classNameProps="modal_text" variant="span">
              You have selected {selectedModelCount || 0}/3 Models:{" "}
            </SullyTypography>
            <span className="model_name">{getModelNames(selectedModels)}</span>{" "}
            for comparison
          </Box>
        </DialogTitle>
        <IconButton className="close" aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <SullyTypography classNameProps="sideBarTitle">
            Search your desired LLM
          </SullyTypography>
          <Box className="home_box">
            <SearchBox tags={tags} handleTagRemove={handleTagRemove} />
          </Box>
          <Box className="modal_content">
            <SullyTypography classNameProps="sub_title">
              Suggested Tags
            </SullyTypography>

            <Box className="model_tags">
              {isShowTagLoader ? (
                tagsLoaderData.map((val) => <TagsSkeleton key={val} />)
              ) : error ? (
                <></>
              ) : (
                allModelTags.map((modelItem, index) => {
                  const isActive = tags.some((val) => val === modelItem.name);
                  return (
                    <Chip
                      closable={isActive ? () => {} : null}
                      key={`${modelItem.name}-${index}`}
                      label={modelItem.name}
                      classNameProps={`${isActive ? "home_chip_active" : ""} home_chips`}
                      Icon={<RightIcon />}
                      onClick={() => {
                        isActive
                          ? handleTagRemove(modelItem.name)
                          : handleAddTags(modelItem.name);
                      }}
                    />
                  );
                })
              )}
            </Box>
            {isShowZeroState && (
              <Box className="zero_state">
                <ZeroStateComponent
                  title="No Record Found!"
                  text="No Search Result Found, Please try again"
                  icon={false}
                />
              </Box>
            )}
            {isShowModels ? (
              <>
                <SullyTypography classNameProps="sideBarTitle search">
                  Search Result
                </SullyTypography>
                <Grid
                  container
                  justifyContent={"flex-start"}
                  alignItems={"flex-stretch"}
                  rowSpacing={6}
                  columnSpacing={3}
                >
                  {modalModels.map((model) => (
                    <Grid
                      item
                      key={model.extId}
                      xs={12}
                      sm={6}
                      lg={4}
                      xl={4}
                      rowSpacing={0}
                    >
                      <LlmSelectionModelCard
                        data={model}
                        active={isModeSelected(model.extId)}
                        addBtn={{
                          text: "Add To Compare",
                          action: addModelToComparison,
                        }}
                        removeBtn={{
                          text: "Remove From Comparision",
                          action: handleRemoveModel,
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </>
            ) : isCardsLoading ? (
              <Grid
                container
                justifyContent={"flex-start"}
                alignItems={"flex-stretch"}
                rowSpacing={6}
                columnSpacing={3}
              >
                {[1, 2, 3].map((val) => (
                  <Grid
                    item
                    key={val}
                    xs={12}
                    sm={6}
                    lg={4}
                    xl={4}
                    rowSpacing={0}
                  >
                    <ModalCardSkeleton />
                  </Grid>
                ))}
              </Grid>
            ) : (
              " "
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <OutlinedButton className="outlined_button" onClick={handleClose}>
            Cancel
          </OutlinedButton>
          <PrimaryButton
            onClick={handleComparision}
            isLoading={featureLoading}
            disabled={!selectedModels.length}
          >
            Compare Models ({selectedModelCount})
          </PrimaryButton>
        </DialogActions>
      </LlmModelWrapper>
    </>
  );
}

LlmModelsModal.propTypes = {
  isLlmModalOpen: PropTypes.bool,
  setIsLlmModalOpen: PropTypes.func,
};
