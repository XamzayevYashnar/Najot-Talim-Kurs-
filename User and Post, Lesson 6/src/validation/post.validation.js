import Joi from "joi";

export class PostValidate {
    static postObj(data) {
        const postSchema = Joi.object({
            title: Joi.string().min(6).max(20).required().messages({
                "string.empty": "Iltimos title ni bush qoldirmang!",
                "string.min": "Iltimos matn 6 ta harfdan kam bulmasin!",
                "string.max": "Iltimos matn 20 ta harfdan oshib ketmasin!",
                "any.required": "Title kiritilishi shart!"
            }),
            content: Joi.string().min(20).max(1000).required().messages({
                "string.empty": "Iltimos content ni bush qoldirmang!",
                "string.min": "Iltimos matn 20 ta harfdan kam bulmasin!",
                "string.max": "Iltimos matn 1000 ta harfdan oshib ketmasin!",
                "any.required": "Content kiritilishi shart!"
            })
        });
        return postSchema.validate(data);
    }

    static patchObj(data) {
        const postSchema = Joi.object({
            title: Joi.string().min(6).max(20).optional().messages({
                "string.empty": "Iltimos title ni bush qoldirmang!",
                "string.min": "Iltimos matn 6 ta harfdan kam bulmasin!",
                "string.max": "Iltimos matn 20 ta harfdan oshib ketmasin!"
            }),
            content: Joi.string().min(20).max(1000).optional().messages({ 
                "string.empty": "Iltimos content ni bush qoldirmang!",
                "string.min": "Iltimos matn 20 ta harfdan kam bulmasin!",
                "string.max": "Iltimos matn 1000 ta harfdan oshib ketmasin!"
            })
        });
        return postSchema.validate(data);
    }
}