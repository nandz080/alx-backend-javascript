const updateUniqueItems = (updatedMap) => {
  if (!(updatedMap instanceof Map)) throw new Error('Cannot process');

  updatedMap.forEach((value, key) => {
    if (value === 1) updatedMap.set(key, 100);
  });
};

export default updateUniqueItems;
