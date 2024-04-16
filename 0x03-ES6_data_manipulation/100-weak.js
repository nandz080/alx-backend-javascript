const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let numOfQueries = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, numOfQueries -= -1);
  if (numOfQueries >= 5) throw new Error('Endpoint load is high');
  return numOfQueries;
};

export { weakMap, queryAPI };
