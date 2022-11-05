const Joi = require("joi");
const noteSchema = Joi.object({
  title: Joi.string().required(),
  tags: Joi.string().required(),
  body: Joi.string().required(),
});
module.exports = { noteSchema };
