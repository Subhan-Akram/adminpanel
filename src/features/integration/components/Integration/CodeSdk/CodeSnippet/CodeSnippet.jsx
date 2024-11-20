/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { CodeSkeleton } from "components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { formatCode } from "features/integration/utils";
import { InitialCodeComponent } from "features/integration/components";
import { darkCodeBlockStyle } from "features/integration/components/SyntaxHighLight/style";
import { lightCodeBlockStyle } from "features/integration/components/SyntaxHighLight/style";
const CodeSnippet = ({ activeTab, setIsAddKeyModalOpen }) => {
  const { securityKey, codeSnippet, isSnippetLoading, isLanguageCodeLoading } =
    useSelector((state) => state.integration);
  const { mode } = useSelector((state) => state.theme);
  const isLoading =
    !!isSnippetLoading || (!!isLanguageCodeLoading && codeSnippet);
  const isCodeSnippet = !securityKey && !isLoading;

  const languageFormat = () => {
    const code = activeTab.code.toLowerCase();
    if (code === "curl") return "bash";
    if (code === "open_api") return "json";
    return code;
  };

  if (isLoading) {
    return (
      <Box className="skeleton_box">
        <CodeSkeleton />
      </Box>
    );
  }

  if (isCodeSnippet) {
    return (
      <Box className="initial_component_box">
        <InitialCodeComponent
          title={<>To view SDK Code please enter your Security key to verify</>}
          text=""
          btnText={"Add Secuity Key"}
          icon={false}
          handleClick={() => setIsAddKeyModalOpen(true)}
        />
      </Box>
    );
  }

  return (
    <>
      <SyntaxHighlighter
        wrapLongLines={true}
        language={languageFormat()}
        style={mode === "dark" ? darkCodeBlockStyle : lightCodeBlockStyle}
      >
        {formatCode(codeSnippet)}
      </SyntaxHighlighter>
    </>
  );
};

CodeSnippet.propTypes = {
  activeTab: PropTypes.object,
  setIsAddKeyModalOpen: PropTypes.func,
};

export default CodeSnippet;
