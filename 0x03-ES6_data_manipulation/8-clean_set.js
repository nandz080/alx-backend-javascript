export default function cleanSet(set, startString) {
  let stringSet = '';
  if (!startString || !startString.length) 
	return stringSet;
  for (const val of set) {
    if (val && val.startsWith(startString)) {
      stringSet += `${val.slice(startString.length)}-`;
    }
  }
  return stringSet.slice(0,stringSet.length - 1);
}
