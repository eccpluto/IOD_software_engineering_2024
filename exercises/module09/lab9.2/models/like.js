const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    // _id of type ObjectId is auto created by Mongoose,
    user_id: { type: ObjectId, trim: true, required: true },
    blog_port_id: { type: ObjectId, trim: true, required: true }
});

// export the model for a single entry in the collection
module.exports = mongoose.model('like', likeSchema);