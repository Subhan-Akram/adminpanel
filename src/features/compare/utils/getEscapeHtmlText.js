const getEscapeHtmlText = (str) => {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

export default getEscapeHtmlText;
