export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer, 0, length);
  const arr = new Int8Array(buffer);
  arr[position] = value;
  return dataView;
}
