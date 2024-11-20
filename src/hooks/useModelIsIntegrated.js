import { getAllModelSet } from "features/integration/services";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isModelExist } from "utils";

function useModelIsIntegrated(extId) {
  const [isIntegrated, setIsIntegrated] = useState(false);
  const { modelSet } = useSelector((state) => state.integration);
  const [{ aiModelsInSet = [] } = {}] = modelSet;
  const dispatch = useDispatch();

  useEffect(() => {
    const getModelSet = async () => {
      if (!modelSet.length) await dispatch(getAllModelSet());
      const isModelSelected = isModelExist(aiModelsInSet, extId);
      setIsIntegrated(isModelSelected);
    };
    getModelSet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, extId, modelSet.length]);

  return isIntegrated;
}

export default useModelIsIntegrated;
