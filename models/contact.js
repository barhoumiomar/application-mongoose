// models/Contact.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for the contact
const contactSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,  // Make sure fullName is provided
    },
    email: {
      type: String,
      required: true,  // Make sure email is provided
      unique: true,    // Email must be unique
    },
    phoneNumber: {
      type: Number,
      required: true,  // Phone number must be provided
    },
    birthdate: {
      type: Number,    // Storing birthdate as a timestamp (milliseconds)
      required: true,  // Birthdate must be provided
    },
  },
  { timestamps: true }  // Automatically add createdAt and updatedAt fields
);

// Create and export the Contact model
const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
