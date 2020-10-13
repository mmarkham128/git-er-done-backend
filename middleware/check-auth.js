const jtw = require("jsonwebtoken")

module.exports = function(req,res,next) {
    try {
    const token = req.headers.authorization.split(" ")[1];
        jtw.verify(token, "secretkey");
        next()
    } catch (error) {
        res.status(401).json({message: "Auth Failed"})
    }
};