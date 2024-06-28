const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // _id of type ObjectId is auto created by Mongoose,
    email: { type: String, trim: true, required: true },
    username: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true }
});

// export the model for a single entry in the collection
module.exports = mongoose.model('user', userSchema);