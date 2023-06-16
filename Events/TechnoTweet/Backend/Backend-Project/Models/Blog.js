const mongoose = require('mongoose');
const User = require('./User');

const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: User,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    },
    comments:[
            {
                name:{
                    type:String,
                    required:true
                },
                date:{
                    type:Date,
                    default:Date.now,
                    required:true
                },
                text:{
                    type:String,
                    required:true
                },
            },
        ]
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;
