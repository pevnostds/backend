const Joi = require("joi");

exports.create = Joi.object().keys({
  nama: Joi.string().min(3).max(50).required(), 
  alamat: Joi.string().max(100).min(3).required(),
  jenis_kelamin: Joi.string().valid('L', 'P').required(),
  umur: Joi.number().required(),
  user_id: Joi.number().required()
})


exports.update = Joi.object().keys({
  nama: Joi.string().min(3).max(50).required(),
  alamat: Joi.string().max(100).min(3).required(), 
  jenis_kelamin: Joi.string().valid('L', 'P').required(),
  umur: Joi.number().required(),
  user_id: Joi.number().required()
})

