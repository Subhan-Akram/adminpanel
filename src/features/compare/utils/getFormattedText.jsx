import React from "react";
import getEscapeHtmlText from "./getEscapeHtmlText";

const getFormattedText = (text) => {
  const formattedText = text.split("\n").map((line, index) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
      return (
        <React.Fragment key={index}>
          <h3>{trimmedLine.replace(/\*\*/g, "")}</h3>{" "}
        </React.Fragment>
      );
    }

    if (trimmedLine.startsWith("*")) {
      return (
        <React.Fragment key={index}>
          <li style={{ marginBottom: "10px" }}>
            {trimmedLine.replace(/\*\*/g, "").replace("*", "").trim()}
          </li>{" "}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment key={index}>
        <span
          dangerouslySetInnerHTML={{ __html: getEscapeHtmlText(trimmedLine) }}
        />
      </React.Fragment>
    );
  });

  return <div>{formattedText}</div>;
};

export default getFormattedText;
