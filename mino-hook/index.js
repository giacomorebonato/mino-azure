"use strict";
var Joi = require('joi');
var schema = Joi.object().keys({
    name: Joi.string().required(),
    surname: Joi.string().required()
});
module.exports = function (context, data) {
    context.log('Webhook was triggered!');
    Joi.validate(data.body, schema, function (error, value) {
        context.res.body = !error ? data.body : { error: error };
        context.done();
    });
};
