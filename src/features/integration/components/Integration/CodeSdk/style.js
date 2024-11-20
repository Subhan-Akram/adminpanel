import { Card, styled } from "@mui/material";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeSdkWrapper = styled(Card)`
  margin-top: 24px;
  padding: 0;

  & .sdk_header {
    display: flex;
    align-items: center;
    padding: 16px 24px;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-1);
    & .copy_text {
    }
  }
  & .sdk_header_left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 31px;
  }
  & .initial_component_box {
    width: 100%;
  }
  & .skeleton_box {
    width: 100%;
  }
  & .code_display {
    padding: 16px 24px;
    height: calc(100vh - 450px);
    overflow: auto;
    display: flex;
    @media screen and (max-height: 800px) {
      height: 400px;
    }
  }
`;

export const darkCodeStyle = {
  ...vscDarkPlus,
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: "none",
    overflow: "auto",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    // wordBreak: "break-word",
    // overflowWrap: "break-word",
  },
  // 'code[class*="language-"]': {

  //   ...vscDarkPlus['code[class*="language-"]'],
  //   overflow:"auto",

  // },
};

export const lightCodeStyle = {
  ...a11yLight,
  'pre[class*="language-"]': {
    ...a11yLight['pre[class*="language-"]'],
    background: "transparent",
    overflow: "auto",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
  },
  'code[class*="language-"]': {
    ...a11yLight['code[class*="language-"]'],
    overflow: "auto",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
  },
};
