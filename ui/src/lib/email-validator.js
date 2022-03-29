const validator = require("email-validator");
export const validateEmail = (email) => {
    return validator.validate(email);
}