const Joi = require('joi');

const user_val = {

    register_schema: Joi.object().keys({
        email: Joi.string().email().min(5).max(30).required(),
        name: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(5).max(30).required()
    }),

    update_schema: Joi.object().keys({
        name: Joi.string().min(3).max(30).required(),
        info: Joi.string().max(100).allow(null, ''),
        avatar: Joi.string().max(100).allow(null, '')
    }),

    login_schema: Joi.object().keys({
        email: Joi.string().email().min(5).max(30).required(),
        password: Joi.string().min(5).max(30).required()
    })

}

module.exports = user_val;