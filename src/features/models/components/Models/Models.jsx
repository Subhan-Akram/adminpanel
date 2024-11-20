/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { ModelSearchWrapper } from "./style";
import { Box, Breadcrumbs, Button } from "@mui/material";
import { ModelBanner, PrimaryButton, SullyTypography } from "components";
import { getAllModelSet } from "features/integration/services";
import { getSearchModels } from "features/models/services";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RightArrowIcon } from "sullyIcons";
import { getBreadcrumb, getModelNames } from "utils";
import ModelsList from "./ModelsList";
import { getFearureComparison } from "features/compare";
import { useIsModelSelected } from "hooks";
import { homePath } from "features/home";
import { modelPath } from "features/models";
import { setModelsArray } from "features/models/slice";
import GetBreadcrumb from "utils/getBreadcrumb";

const Models = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tags] = useState(JSON.parse(sessionStorage.getItem("tags")) || []);
  const { modelSet } = useSelector((state) => state.integration);
  const { selectedModelCount, totalSelectedModels } = useIsModelSelected();

  const length = selectedModelCount;
  const isFetchModel = !!tags.length;
  const onClickCompare = () => {
    dispatch(
      getFearureComparison({
        models: totalSelectedModels,
        dispatch,
      }),
    );
    navigate("/home/models/comparision/feature");
  };

  useEffect(() => {
    if (!modelSet.length) dispatch(getAllModelSet());
  }, [dispatch, modelSet.length]);

  useEffect(() => {
    const fetchSearchModels = () => {
      dispatch(
        getSearchModels({
          tags,
          dispatch,
          isModal: false,
        }),
      );
    };
    if (isFetchModel) fetchSearchModels();
  }, [dispatch, isFetchModel, tags]);
  useEffect(() => {
    dispatch(setModelsArray({ name: "selectedModels", data: [] }));
  }, [dispatch]);
  return (
    <>
      <ModelSearchWrapper>
        <Box className="search_content">
          {!!tags?.length && (
            <Breadcrumbs separator={<RightArrowIcon />} aria-label="breadcrumb">
              <Breadcrumbs
                separator={<RightArrowIcon />}
                aria-label="breadcrumb"
              >
                {GetBreadcrumb()}
              </Breadcrumbs>
            </Breadcrumbs>
          )}
          <Box className="model_page_header">
            <SullyTypography classNameProps="page_title" variant="body1">
              Search Results for LLMs
            </SullyTypography>
            {!length && <Button variant="text">{"Compare Models (0)"}</Button>}
          </Box>

          {!!length && (
            <Box className="banner_box">
              <ModelBanner
                text={
                  <SullyTypography
                    classNameProps="modaltitle1_regular banner_text1"
                    variant="body1"
                  >
                    {`You have selected ${length}/3 Models ${getModelNames(totalSelectedModels)} for comparison`}
                  </SullyTypography>
                }
              >
                <PrimaryButton
                  className="compare_btn"
                  onClick={() => onClickCompare()}
                >
                  Compare Models ({length})
                </PrimaryButton>
              </ModelBanner>
            </Box>
          )}
          <ModelsList />
        </Box>
      </ModelSearchWrapper>
    </>
  );
};

export default Models;
