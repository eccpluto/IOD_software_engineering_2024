const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    // _id of type ObjectId is auto created by Mongoose,
    user_id: { type: ObjectId, trim: true, required: true },
    blog_post_id: { type: ObjectId, trim: true, required: true },
    content: { type: String, trim: true, required: true },
});

// export the model for a single entry in the collection
module.exports = mongoose.model('comment', commentSchema);