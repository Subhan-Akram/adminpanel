const isCompareModelExist = (data) => {
  return data.some((val) => typeof val === "object");
};

export default isCompareModelExist;
