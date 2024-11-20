import { setSelectedModelLength } from "features/models/slice";
import { useMemo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useIsModelSelected = () => {
  const dispatch = useDispatch();
  const { comparisonData } = useSelector((state) => state.compare);
  const { selectedModels } = useSelector((state) => state.models);

  const totalSelectedModels = useMemo(() => {
    const comparisionDataIds = comparisonData.filter((val) => val?.extId);

    const combinedArray = [...selectedModels, ...comparisionDataIds];

    const uniqueModels = combinedArray.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.extId === item.extId),
    );

    return uniqueModels;
  }, [comparisonData, selectedModels]);

  const selectedModelCount = totalSelectedModels.length;

  useEffect(() => {
    dispatch(setSelectedModelLength(selectedModelCount));
  }, [selectedModelCount, dispatch]);

  const isModeSelected = useCallback(
    (extId) => totalSelectedModels.some((val) => val.extId === extId),
    [totalSelectedModels],
  );

  return { isModeSelected, selectedModelCount, totalSelectedModels };
};

export default useIsModelSelected;
