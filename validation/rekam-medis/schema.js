const Joi = require("joi");

exports.create = Joi.object().keys({
  pasien_id: Joi.number().required(),
  tanggal: Joi.date().required(),
  keluhan: Joi.string().max(200).required(),
  diagnosis: Joi.string().max(100).required(),
})


exports.update = Joi.object().keys({
  pasien_id: Joi.number().required(),
  tanggal: Joi.date().required(),
  keluhan: Joi.string().max(200).required(),
  diagnosis: Joi.string().max(100).required(),
})

