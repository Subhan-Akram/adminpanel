import { useIsModelSelected } from "hooks";
import { useLocation, useSearchParams } from "react-router-dom";

function useChatPrompt() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const { totalSelectedModels } = useIsModelSelected();
  const extId = searchParams.get("extId");
  const isTryPrompt = pathname.includes("/try-prompt");

  const handlePromptPayload = (prompt) => {
    const modelExtIds = isTryPrompt
      ? [extId]
      : totalSelectedModels.map((val) => val.extId);
    const payload = {
      modelExtIds,
      prompt,
      modelSetExtId: "",
    };
    return payload;
  };
  return { handlePromptPayload };
}

export default useChatPrompt;
