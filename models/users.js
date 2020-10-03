const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({

    employeeFirstName: { type: String, required: true},
    employeeLastName: { type: String, required: true},
    employeeCellNumber: { type: String, required: true},
    username: { type: String, required: true},
    admin: { type: Boolean, required: true},
    employeeID: { type: Number, required: true},
    password:{ type: String, required: false}
});
UserSchema.associate = function(models) {
    // associations defined here
}
// export model user with UserSchema

module.exports = mongoose.model("user", UserSchema);

