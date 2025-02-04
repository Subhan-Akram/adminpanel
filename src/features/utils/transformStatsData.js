import { getStatsItems, camelCaseToText } from ".";

const transformStatsData = (data = {}) => {
  const dataList = Object.keys(data).map((val) => {
    const { icon, link, title } = getStatsItems(val);
    return {
      title,
      stats: data[val],
      link,
      icon,
    };
  });

  return dataList;
};
export default transformStatsData;
