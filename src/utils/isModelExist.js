function isModelExist(collection, extId) {
  return collection.some((val) => val.extId === extId);
}

export default isModelExist;
