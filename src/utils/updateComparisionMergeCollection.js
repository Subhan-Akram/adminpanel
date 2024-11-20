function updateComparisionMergeCollection(currentCollection) {
  const result = [...currentCollection];
  while (result.length < 3) {
    result.push("");
  }

  return result;
}

export default updateComparisionMergeCollection;
