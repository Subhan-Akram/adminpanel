import { useState } from "react";

const useCopyText = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [copyError, setCopyError] = useState(null);
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1200);
      })
      .catch((err) => {
        setCopyError(err);
        console.error("Failed to copy: ", err);
      });
  };

  return { isCopied, copyError, copyToClipboard };
};

export default useCopyText;
