import { Box, Grid } from "@mui/material";
import { FeatureStyleWrapper } from "./style";
import { SwapIcon } from "sullyIcons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FeatureCardSkeleton } from "components";
import { isCompareModelExist } from "utils";
import { swapModels } from "features/compare";
import { LlmModelsModal } from "../common";
import { swapHighLight } from "features/compare/utils";
import AddLlmCard from "./AddLlmCard";
import FeatureCard from "./FeatureCard";
import { setModelsArray } from "features/models/slice";

const FeatureComparision = () => {
  const [isLlmModalOpen, setIsLlmModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, comparisonData, error } = useSelector(
    (state) => state.compare,
  );

  const isCardSelected = isCompareModelExist(comparisonData);

  const data = comparisonData.length ? comparisonData : new Array(3).fill("");
  useEffect(() => {
    dispatch(setModelsArray({ name: "selectedModels", data: [] }));
  }, [dispatch]);
  return (
    <>
      <LlmModelsModal
        setIsLlmModalOpen={setIsLlmModalOpen}
        isLlmModalOpen={isLlmModalOpen}
      />
      <FeatureStyleWrapper isCardSelected={isCardSelected}>
        {isLoading && !error ? (
          <Grid className="grid_container" container spacing={2}>
            {[1, 2, 3].map((val) => (
              <Grid className="grid_item" key={val} item xs={12} sm={4} md={4}>
                <FeatureCardSkeleton index={val} />
              </Grid>
            ))}
          </Grid>
        ) : error ? (
          <></>
        ) : (
          <Grid className="grid_container" container spacing={"24px"}>
            {data.map((val, i) => {
              const isSwapIconEnable = swapHighLight(i, comparisonData);
              return (
                <Grid
                  className={`grid_item ${comparisonData.length && "grid_item_feature"}`}
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  key={i}
                >
                  {val ? (
                    <Box className="left_box">
                      {i < 2 ? (
                        <Box
                          onClick={() => {
                            isSwapIconEnable && dispatch(swapModels(i));
                          }}
                          className={`right_box_feature_icon ${isSwapIconEnable && "active_swap"}`}
                        >
                          <SwapIcon />
                        </Box>
                      ) : (
                        ""
                      )}
                      <FeatureCard data={val} index={i} />
                    </Box>
                  ) : (
                    <Box className="left_box">
                      <AddLlmCard
                        isCardSelected={isCardSelected}
                        setIsLlmModalOpen={setIsLlmModalOpen}
                        index={i}
                      />
                    </Box>
                  )}
                </Grid>
              );
            })}
          </Grid>
        )}
      </FeatureStyleWrapper>
    </>
  );
};

export default FeatureComparision;
