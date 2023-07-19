export default class Validations {
    static checkEmail(email) {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return emailRegex.test(email);
    }
  
    static minLength(name, minLength) {
      return name.length >= minLength;
    }
  }
  