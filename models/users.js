const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")


const UserSchema = mongoose.Schema({

    employeeFirstName: { type: String, required: true},
    employeeLastName: { type: String, required: true},
    employeeCellNumber: { type: String, required: true},
    username: { type: String, required: true, unique: true},
    admin: { type: Boolean, required: true, default: false},
    employeeID: { type: String, required: true},
    password:{ type: String, required: false},
});

UserSchema.plugin(uniqueValidator)

UserSchema.associate = function(models) {
    // associations defined here
}
// export model user with UserSchema

module.exports = mongoose.model("User", UserSchema);

