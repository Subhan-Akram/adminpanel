import { useEffect, useRef } from "react";
import hljs from "highlight.js";
// import "highlight.js/styles/a11y-light.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import java from "highlight.js/lib/languages/java"; // Import Java
import json from "highlight.js/lib/languages/json"; // Import JSON
import kotlin from "highlight.js/lib/languages/kotlin"; // Import Kotlin

// Register languages
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("java", java);
hljs.registerLanguage("json", json);
hljs.registerLanguage("kotlin", kotlin);

const HighlightedCodeLight = ({ language, children }) => {
  const codeRef = useRef(null);
  const { mode } = useSelector((state) => state.theme);
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
    return (codeRef.current = null);
  }, [children, mode]); // Re-highlight when the theme changes

  return (
    <pre
      style={{
        background: "var(--surface-l1)",
        padding: "16px",
        borderRadius: "4px",
        overflowX: "auto",
      }}
    >
      <code
        style={{
          background: "var(--surface-l1)",
        }}
        ref={codeRef}
        className={language}
      >
        {children}
      </code>
    </pre>
  );
};

HighlightedCodeLight.propTypes = {
  language: PropTypes.string,
  children: PropTypes.any,
};

export default HighlightedCodeLight;
