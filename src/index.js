export default class Validator {
  static validateUsername(name) {
    return /^[A-Za-z][A-Za-z0-9_\-]+[A-Za-z]$/.test(name);
  }
}
