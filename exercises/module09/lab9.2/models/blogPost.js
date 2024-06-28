const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = mongoose.Types;

const blogPostSchema = new Schema({
    // _id of type ObjectId is auto created by Mongoose,
    user_id: { type: Types.ObjectId, trim: true, required: true },
    title: { type: String, trim: true, required: true },
    content: { type: String, trim: true, required: true },
    image: { type: Buffer, required: false }
});

// export the model for a single entry in the collection
module.exports = mongoose.model('blogPost', blogPostSchema);