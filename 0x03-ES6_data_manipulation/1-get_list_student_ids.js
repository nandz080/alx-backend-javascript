// eslint-disable-next-line consistent-return
export default function getListStudentIds(args) {
  if (!Array.isArray(args)) return [];
  return args.map((arrId) => arrId.id);
}
