function countObjects(array) {
  let objectCount = 0;
  array.forEach((item) => {
    if (typeof item === "object" && item !== null && !Array.isArray(item)) {
      objectCount++;
    }
  });

  return objectCount;
}

export default countObjects;
