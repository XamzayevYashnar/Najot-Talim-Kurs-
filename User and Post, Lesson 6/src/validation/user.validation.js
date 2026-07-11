import Joi from "joi";

export class UserValidate {
  static postUser(data) {
    const userSchema = Joi.object({
      username: Joi.string().min(6).max(20).required().messages({
        "string.empty": "Iltimos username ni bush qoldirmang",
        "string.min": "Username juda kichkina",
        "string.max": "Username juda uzun",
        "any.required": "Username kiritilishi shart"
      }),
      email: Joi.string().email().required().messages({ 
        "string.empty": "Emailni bush qoldirmang!",
        "string.email": "Yaroqli email manzilini kiriting!",
        "any.required": "Email kiritilishi shart"
      })
    });

    return userSchema.validate(data);
  }

  static patchUser(data) {
    const userSchema = Joi.object({
      username: Joi.string().min(6).max(20).optional().messages({
        "string.empty": "Iltimos username ni bush qoldirmang",
        "string.min": "Username juda kichkina",
        "string.max": "Username juda uzun"
      }),
      email: Joi.string().email().optional().messages({ 
        "string.empty": "Emailni bush qoldirmang!",
        "string.email": "Yaroqli email manzilini kiriting!"
      })
    });

    return userSchema.validate(data);
  }
}
