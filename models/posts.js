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
    employeeFirstName: { type: String, required: false, default: null },
    employeeLastName: { type: String, required: false, default: null},
    jobNotes: { type: String, required: true, default: null},
    employeeID: { type: String, required: false, default: null},
    jobCompleted: { type: Boolean, required: false, default: false},
    jobDeleted: { type: Boolean, required: false,  default: false},

});

module.exports = mongoose.model('Post', postSchema);

