export default function groceriesList() {
  const groceries = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const groceryMap = new Map();
  // eslint-disable-next-line no-unused-vars
  for (const item of groceries) {
    groceryMap.set(item[0], item[1]);
  }
  return groceryMap;
}
