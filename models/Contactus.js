const mongoose = require('mongoose');
const { isEmail } = require('validator');

const contactusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter an name'],
        lowercase: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        lowercase: true,
        validate:[isEmail, 'Please enter a valid email']
    },
    message: {
        type: String,
        required: [true, 'Please enter an message'],
        minlength: [6, 'Minimum message length is 6 characters'],
    },
});

const Contactus = mongoose.model('contactus', contactusSchema);

module.exports = Contactus;