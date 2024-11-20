/* eslint-disable no-unused-vars */
import {
  a11yLight,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../../../../fonts/fonts.css";
export const lightCodeBlockStyle = {
  ...atomOneLight,
  'pre[class*="language-"]': {
    ...atomOneLight['pre[class*="language-"]'],
    overflow: "auto",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    fontFamily: "satoshi !important",
    // background: "none",
  },
};

export const darkCodeBlockStyle = {
  ...vscDarkPlus,
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: "none",
    overflow: "auto",
    wordWrap: "break-word",
    fontFamily: "satoshi !important",
    whiteSpace: "pre-wrap",
  },
};
