import { useState } from "react";
import { Box, IconButton, TextareaAutosize } from "@mui/material";
import { PromptWriteWrapper } from "./style";
import { BannerDog, Shadow } from "assets";
import { SendIcon } from "sullyIcons";
import { useDispatch } from "react-redux";
import { getChatPrompts } from "features/compare/services";
import { addPromptQuery } from "features/compare/slice";
import { useLocation, useSearchParams } from "react-router-dom";
import { useIsModelSelected } from "hooks";

export default function PromptWrite() {
  const [prompt, setPrompt] = useState("");
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const extId = searchParams.get("extId");
  const isTryPrompt = pathname.includes("/try-prompt");
  const { totalSelectedModels } = useIsModelSelected();

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await handleSubmit();
    }
  };
  const handleSubmit = async () => {
    try {
      if (prompt) {
        dispatch(addPromptQuery(prompt));
        setPrompt("");

        const modelExtIds = isTryPrompt
          ? [extId]
          : totalSelectedModels.map((val) => val.extId);
        const payload = {
          modelExtIds,
          prompt,
          modelSetExtId: "",
        };
        await dispatch(getChatPrompts({ payload, dispatch, isTryPrompt }));
      }
    } catch (error) {
      console.error("Error submitting prompt:", error);
    }
  };

  return (
    <PromptWriteWrapper>
      <Box className="shadow">
        <label htmlFor="askSullyTextarea">
          <img src={Shadow} alt="shadow" />
        </label>
      </Box>
      <Box className="startIcon">
        <label htmlFor="askSullyTextarea">
          <img src={BannerDog} alt="dog" />
        </label>
      </Box>
      <TextareaAutosize
        id="askSullyTextarea"
        value={prompt}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Ask Sully"
        className="input_prompt"
      />
      <IconButton
        className="send_btn"
        disabled={!prompt}
        onClick={handleSubmit}
      >
        <SendIcon />
      </IconButton>
    </PromptWriteWrapper>
  );
}
