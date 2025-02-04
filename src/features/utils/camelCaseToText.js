const camelCaseToText = (text) => {
  return text.replace(/([A-Z])/g, " $1").trim();
};

export default camelCaseToText;
