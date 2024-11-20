import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { LlmModelWrapper } from "./style";
import PropTypes from "prop-types";
import { Box, CircularProgress, Grid, IconButton } from "@mui/material";
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
import { getAllModelTags, setSearchDone } from "features/home";
import { useEffect } from "react";
import { tagsLoaderData } from "features/compare/constants";
import { LlmSelectionModelCard } from "features/compare/components";
import { useCreateModelSet, useRemoveModel } from "hooks";
import { removeModels } from "features/models/slice";
import { addSelectedModel } from "features/models";
import { removeModelTag } from "features/home";
import { addModelTag } from "features/home";
import { setCollectionByName } from "features/home";

export default function SearchModelSetModal({ isOpen, setIsOpen }) {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.home);
  const handleCreateModelSet = useCreateModelSet([]);
  const { handleRemoveModel } = useRemoveModel();
  const isModelActive = (extId) =>
    selectedModels.some((val) => val.extId === extId);
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
  const {
    modelSet,
    createModelSetIsLoading,
    error: integrationError,
  } = useSelector((state) => state.integration);
  const [{ aiModelsInSet = [] } = {}] = modelSet;
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      dispatch(setCollectionByName({ name: "tags", data: [] }));
      dispatch(removeModels());
      dispatch(setSearchDone(false));
    });
  };

  const handleConfirm = async () => {
    const payload = selectedModels.map((val) => val.extId);
    const getModelIds = aiModelsInSet?.map((val) => val.extId) || [];
    const res = await handleCreateModelSet([...getModelIds, ...payload]);
    if (res) {
      handleClose();
    }
  };
  const addModelSet = (data) => {
    // if (selectedModels.length === 3 || aiModelsInSet?.length === 3) return;
    dispatch(addSelectedModel(data));
  };

  const handleAddTags = (tag) => dispatch(addModelTag(tag));
  const handleTagRemove = (tag) => dispatch(removeModelTag(tag));

  useEffect(() => {
    if (isOpen && !allModelTags.length) {
      dispatch(getAllModelTags(dispatch));
    }
  }, [dispatch, isOpen, allModelTags.length]);
  return (
    <>
      <LlmModelWrapper
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={"lg"}
      >
        <DialogTitle id="customized-dialog-title">
          <SullyTypography classNameProps="modal_title">
            Integrate Models
          </SullyTypography>
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
              {tagsLoading && !allModelTags.length & !error ? (
                error ? (
                  <></>
                ) : (
                  tagsLoaderData.map((val) => <TagsSkeleton key={val} />)
                )
              ) : (
                allModelTags.map((modelItem) => {
                  const isActive = tags.some((val) => val === modelItem.name);
                  return (
                    <Chip
                      closable={isActive ? () => {} : null}
                      key={modelItem.name}
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
            {!modelsLoading && isSearchDone && !modalModels.length ? (
              <Box className="zero_state">
                <ZeroStateComponent
                  title="No Record Found!"
                  text="No Search Result Found, Please try again"
                  icon={false}
                />
              </Box>
            ) : (
              ""
            )}
            {!!modalModels.length &&
            // !error &&
            !integrationError &&
            !modelsLoading ? (
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
                  {modalModels.map((val) => (
                    <Grid
                      item
                      key={val.extId}
                      xs={12}
                      sm={6}
                      lg={4}
                      xl={4}
                      rowSpacing={0}
                    >
                      <LlmSelectionModelCard
                        active={isModelActive(val.extId)}
                        data={val}
                        isIntegratedCard={true}
                        addBtn={{
                          text: "Add to Integrate",
                          action: addModelSet,
                        }}
                        removeBtn={{
                          text: "Remove From Integration",
                          action: handleRemoveModel,
                        }}
                      ></LlmSelectionModelCard>
                    </Grid>
                  ))}
                </Grid>
              </>
            ) : modelsLoading ? (
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
                    <ModalCardSkeleton key={val} />
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
            onClick={handleConfirm}
            disabled={!selectedModels.length}
          >
            Done
            {createModelSetIsLoading ? (
              <Box className="button_loader">
                <CircularProgress size={12} color="inherit" />
              </Box>
            ) : (
              ""
            )}
          </PrimaryButton>
        </DialogActions>
      </LlmModelWrapper>
    </>
  );
}

SearchModelSetModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
