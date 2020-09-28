const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: { type: String, required: true},
    password:{ type: String, required: true}
});
UserSchema.associate = function(models) {
    // associations defined here
}

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
