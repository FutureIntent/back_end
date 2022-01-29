const Joi = require('joi');

const post_val = {

    post_schema: Joi.object().keys({
        theme: Joi.string().min(1).max(1000).required(),
        text: Joi.string().max(1000000).allow(null, '')
    })

}

module.exports = post_val;