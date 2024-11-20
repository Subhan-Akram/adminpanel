const getParamsSerachValue = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const isSearch = queryParams.get("search");
  return isSearch ? "?search=true" : "";
};

export default getParamsSerachValue;
