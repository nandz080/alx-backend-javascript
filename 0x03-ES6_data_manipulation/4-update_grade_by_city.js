export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((students) => students.location === city)
    .map((person) => {
      const grades = newGrades.filter((students) => students.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
    });
}
