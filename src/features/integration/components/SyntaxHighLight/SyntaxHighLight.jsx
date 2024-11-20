import { useSelector } from "react-redux";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism as DarkSyntaxHighlighter } from "react-syntax-highlighter";
import { lightCodeBlockStyle, darkCodeBlockStyle } from "./style";
import { formatCode } from "features/integration/utils";
import PropTypes from "prop-types";

function SyntaxHighLight({ language }) {
  const { mode } = useSelector((state) => state.theme);
  const { codeSnippet } = useSelector((state) => state.integration);
  return mode === "light" ? (
    <SyntaxHighlighter
      wrapLongLines={true}
      language={language}
      style={lightCodeBlockStyle}
      customStyle={{
        background: "var(--surface-l1)",
        wordWrap: "break-word",
        whiteSpace: "pre-wrap",
        maxWidth: "100%",
      }}
    >
      {formatCode(codeSnippet)}
    </SyntaxHighlighter>
  ) : (
    <DarkSyntaxHighlighter
      wrapLongLines={true}
      language={language}
      style={darkCodeBlockStyle}
      customStyle={{
        background: "var(--surface-l1)",
        wordWrap: "break-word",
        whiteSpace: "pre-wrap",
        maxWidth: "100%",
      }}
    >
      {formatCode(codeSnippet)}
    </DarkSyntaxHighlighter>
  );
}
SyntaxHighLight.propTypes = {
  language: PropTypes.string,
};
export default SyntaxHighLight;
