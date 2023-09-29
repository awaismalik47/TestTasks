const mongoose = require('mongoose');
const Joi = require('joi');

const productValidation = Joi.object(
  {
    Pointvalue: Joi.string().required(),
  }
);

// Create Schema
const pointSchema = mongoose.Schema({
  Pointvalue: String,
},{
  timestamps: true // This will add createdAt and updatedAt fields
});

;

const Points = mongoose.model('Points', pointSchema);

module.exports = {
  Points, // Export the Mongoose model
  validProduct: productValidation, // Export the validation schema
};
