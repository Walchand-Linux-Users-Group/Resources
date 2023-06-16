const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        emailId: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        }
    }
)

const   user = mongoose.model('User', userSchema)
module.exports = user