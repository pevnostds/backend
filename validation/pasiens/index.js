const { create, update } = require("./schema");

const pasienValidations = {
  validateCreatePayload: (payload) => {
    const validationResult = create.validate(payload);
    if (validationResult.error) {
      return {
        errors: validationResult.error.details.map((err) => err.message),
      };
    }
    return { errors: null };
  },

  validateUpdatePayload: (payload) => {
    const validationResult = update.validate(payload);
    if (validationResult.error) {
      return {
        errors: validationResult.error.details.map((err) => err.message),
      };
    }
    return { errors: null };
  },
};

module.exports = pasienValidations;
