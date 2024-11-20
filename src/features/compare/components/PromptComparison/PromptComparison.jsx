import { ConfirmModal } from "components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isCompareModelExist } from "utils";
import { PromptStyle, PromptStyleWrapper } from "./style";
import { removeCompareModel } from "features/home";
import AddPromptLlm from "./AddPromptLlm";
import { LlmModelsModal } from "../common";
import Prompt from "./Prompt";
import { setModelsArray } from "features/models/slice";

const PromptComparison = () => {
  const dispatch = useDispatch();
  const { isLoading, comparisonData } = useSelector((state) => state.compare);
  const [isLlmModalOpen, setIsLlmModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const isModelSelected = isCompareModelExist(comparisonData);

  const handleModal = (value) => setIsLlmModalOpen(value);
  const handleRemoveModal = (value) => setIsRemoveModalOpen(value);

  const handleRemove = () => {
    dispatch(removeCompareModel({ removeSelectedModel: isRemoveModalOpen }));
    setIsRemoveModalOpen(false);
  };
  useEffect(() => {
    dispatch(setModelsArray({ name: "selectedModels", data: [] }));
  }, [dispatch]);

  return (
    <>
      <ConfirmModal
        isConfirmModalOpen={isRemoveModalOpen}
        handleSubmit={handleRemove}
        setIsConfirmModalOpen={setIsRemoveModalOpen}
        modelName={isRemoveModalOpen.name}
      />
      <LlmModelsModal
        setIsLlmModalOpen={handleModal}
        isLlmModalOpen={isLlmModalOpen}
      />
      {isModelSelected || isLoading ? (
        <PromptStyle>
          <Prompt
            handleRemoveModal={handleRemoveModal}
            handleModal={handleModal}
          />
        </PromptStyle>
      ) : (
        ""
      )}
      {!isModelSelected && !isLoading && (
        <PromptStyleWrapper isModelSelected={isModelSelected}>
          <AddPromptLlm handleModal={handleModal} />
        </PromptStyleWrapper>
      )}
    </>
  );
};

export default PromptComparison;
