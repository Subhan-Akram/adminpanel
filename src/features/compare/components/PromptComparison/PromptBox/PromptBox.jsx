import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { PromptBoxWrapper } from "./style";
import { useChatPrompt } from "features/compare/hooks";
import { getChatPrompts } from "features/compare/services";
import { addPromptQuery } from "features/compare/slice";
import { SullyTypography } from "components";
import { useLocation } from "react-router-dom";

const PromptBox = React.memo(({ promptText }) => {
  const { handlePromptPayload } = useChatPrompt();
  const { pathname } = useLocation();
  const isTryPrompt = pathname === "/try-prompt";
  const dispatch = useDispatch();

  const handleChatPrompt = useCallback(() => {
    dispatch(addPromptQuery(promptText));
    const payload = handlePromptPayload(promptText);
    dispatch(getChatPrompts({ payload, dispatch, isTryPrompt }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handlePromptPayload, promptText, dispatch]);

  return (
    <PromptBoxWrapper onClick={handleChatPrompt}>
      <SullyTypography classNameProps="sub_title_2_regular">
        {promptText}
      </SullyTypography>
    </PromptBoxWrapper>
  );
});

PromptBox.displayName = "PromptBox";
PromptBox.propTypes = {
  promptText: PropTypes.string.isRequired,
};

export default PromptBox;
