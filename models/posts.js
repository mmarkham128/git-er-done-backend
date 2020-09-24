const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    businessName: { type: String, required: true},
    contactFirstName: { type: String, required: true},
    contactLastName: { type: String, required: true},
    contactMainPhoneNumber: { type: String, required: true},
    contactStreet: { type: String, required: true},
    contactCity: { type: String, required: true},
    contactState: { type: String, required: true},
    contactZip: { type: String, required: true},
    employeeFirstName: { type: String, required: true},
    employeeLastName: { type: String, required: true},
    jobNotes: { type: String, required: true},
    employeeID: { type: String, required: false},
    jobCompleted: { type: Boolean, required: false},
    jobDeleted: { type: Boolean, required: false},

});

module.exports = mongoose.model('Post', postSchema);

