function formatCode(code) {
  let formattedCode = code;
  formattedCode = formattedCode.replace(/ {2,}/g, "\n");
  return formattedCode;
}

export default formatCode;
