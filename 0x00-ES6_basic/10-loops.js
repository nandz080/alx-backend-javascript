export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const value of array) {
    newArr.push(appendString + array[array.indexOf(value)]);
  }

  return newArr;
}
