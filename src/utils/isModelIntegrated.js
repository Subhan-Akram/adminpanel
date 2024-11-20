/* eslint-disable no-debugger */
const isModelIntegrated = (models, extId) => {
  if (!models.length) return;
  return models.some((item) => item.extId === extId);
};

export default isModelIntegrated;
