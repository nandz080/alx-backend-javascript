export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') throw new Error();
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
