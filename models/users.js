const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    businessName: {
        type: String,
        required: true,
        allowNull: faslse
    },
    contactFirstName: {
        type: String,
        required: true,
    },
    contactLastName: {
        type:String,
        required: true,
    },
    contactMainPhoneNumber: {
        type: Number,
        require: true,
        unique: true
    },
    contactAltPhoneNumber: {
        type: Number,
    },
    contactStreet: {
        type: String,
        required: true
    },
    contactCity: {
        type: String,
        required: true
    },
    contactState: {
        type: String,
        required: true
    },
    contactZip: {
        type: Number,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admim: {
        type: Boolean,
        defaultValue: false,
        allowNull: false
    },
    employeeFirstName: {
        type: String,
        requried:true
    },
    employeeLastName: {
        type: String,
        requried:true
    },
    employeeID: {
        type: Number,
        requried:true
    },
    employeeWorkNumber: {
        type: Number,
        requried:true
    },
    employeeCellNumber: {
        type: Number,
        requried:true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
UserSchema.associate = function(models) {
    // associations defined here
}

// export model user with UserSchema
module.exports = mongoose.model("User", UserSchema);