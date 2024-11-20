const sortAlphabetically = (data) => {
  return data.slice().sort((a, b) => a.name.localeCompare(b.name));
};

export default sortAlphabetically;
