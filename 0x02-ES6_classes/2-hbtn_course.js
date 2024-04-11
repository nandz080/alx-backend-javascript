export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(newStr) {
    if (typeof newStr !== 'string') { throw new TypeError('Name must be a string'); }
    this._name = newStr;
  }

  get length() {
    return this._length;
  }

  set length(newNum) {
    if (typeof newNum !== 'number') { throw new TypeError('Length must be a number'); }
    this._length = newNum;
  }

  get students() {
    return this._students;
  }

  set students(newArr) {
    if (!Array.isArray(newArr)) { throw new TypeError('Students must be an array'); }
    
    for (let i = 0; i < newArr.length; i++) {
      if (typeof newArr[i] !== 'string') { throw new TypeError('Students must be an array of strings'); }
    }
    this._students = newArr;
  }
}
