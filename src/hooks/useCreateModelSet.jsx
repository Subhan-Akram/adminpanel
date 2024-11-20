import { updateModelSet } from "features/integration/services";
import { createModelSet } from "features/integration/services";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useCreateModelSet = (getNavigatePath) => {
  const dispatch = useDispatch();
  const { modelSet } = useSelector((state) => state.integration);
  const navigate = useNavigate();

  const handleCreateModelSet = async (selectedModel) => {
    const { modelSetExtId, modelSetName } = modelSet[0] || {};
    const payload = {
      name: modelSet[0]?.aiModelsInSet?.length ? modelSetName : "",
      modelExtIds: selectedModel,
    };

    const action = modelSet[0]?.aiModelsInSet?.length
      ? updateModelSet({ modelSetExtId, payload, dispatch })
      : createModelSet({ payload, dispatch });

    const res = await dispatch(action);

    if (res) {
      navigate(`${getNavigatePath}/integration`);
    }
    return res;
  };

  return handleCreateModelSet;
};

export default useCreateModelSet;
