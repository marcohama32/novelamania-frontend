import Validations from "./Validations";

export default class SignupValidations {
  constructor(email, password,firstName) {
    this.email = email;
    this.password = password;
    this.firstName =firstName
  }

  checkValidations() {
    const errors = {};

    // Email validations
    if (!Validations.checkEmail(this.email)) {
      errors.email = 'Invalid Email';
    }

    // Password validations
    if (!Validations.minLength(this.password, 6)) {
      errors.password = 'Password should be at least 6 characters long';
    }

    return errors;
  }
}
