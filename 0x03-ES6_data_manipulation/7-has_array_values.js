export default function hasValuesFromArray(set, arr) {
  for (const boolItem of arr) {
    if (!set.has(boolItem)) return false;
  }
  return true;
}
