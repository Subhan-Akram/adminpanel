import { useEffect, useRef } from "react";
import { PromptChatWrapper } from "./Style";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { SullyTypography } from "components";
import { useSelector } from "react-redux";
import { getPromptModelName } from "features/compare/utils";
import { PromptCompareSkeleton } from "components/skeleton";
import { useLocation } from "react-router-dom";

const PromptChat = ({ model }) => {
  const { extId } = model;
  const promptChatRef = useRef();
  const {
    promptQuery,
    chatLoading,
    promptData: comparePromptData,
    tryPrompt,
  } = useSelector((state) => state.compare);
  const { pathname } = useLocation();
  const isTryPrompt = pathname.includes("/try-prompt");
  const promptData = isTryPrompt ? tryPrompt.promptData : comparePromptData;

  const getSelectedModelChat = promptData.map((val) => {
    const getModelName = getPromptModelName(extId);
    return {
      promptQuery: val["requestedPrompt"],
      promptResponse: val[getModelName],
    };
  });
  useEffect(() => {
    if (promptChatRef.current && chatLoading) {
      promptChatRef.current.scrollTo({
        behavior: "smooth",
        top: promptChatRef.current.scrollHeight,
      });
    }
  }, [chatLoading]);

  return (
    <PromptChatWrapper isTryPrompt={isTryPrompt}>
      {promptData.length || chatLoading ? (
        <Box ref={promptChatRef} className="prompt_response_content ">
          {promptData.length
            ? getSelectedModelChat.map(
                (val) =>
                  val.promptResponse && (
                    <>
                      <Box className="prompt_query_box">
                        <SullyTypography classNameProps="sub_title_1">
                          {val.promptQuery}
                        </SullyTypography>
                      </Box>
                      <Box className="prompt_response_box">
                        <SullyTypography classNameProps="sully_response modaltitle1_regular">
                          <ReactMarkdown>{val.promptResponse}</ReactMarkdown>
                        </SullyTypography>
                      </Box>
                    </>
                  ),
              )
            : ""}

          {chatLoading ? (
            <Box className="prompt_query_box">
              <SullyTypography classNameProps="sub_title_1">
                {promptQuery}
              </SullyTypography>
            </Box>
          ) : (
            ""
          )}
          {chatLoading ? <PromptCompareSkeleton /> : ""}
        </Box>
      ) : (
        ""
      )}
    </PromptChatWrapper>
  );
};
PromptChat.propTypes = {
  model: PropTypes.object,
};
export default PromptChat;
