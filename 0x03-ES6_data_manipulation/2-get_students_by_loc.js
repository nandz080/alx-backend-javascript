import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(student = getListStudents(), city) {
  return student.filter((arrCity) => arrCity.location === city);
}
