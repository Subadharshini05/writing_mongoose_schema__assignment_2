const mongoose = require('mongoose');
const blogPostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    content:{
        type: String,
        required: true,
        minlength: 50
    },
    author: {
        type: String
    },
    tags:{
        type: [String],
        default: ["coding", "tech", "news"]
    },
    category: {
        type: String,
        default: "general"
    },
    likes:{
        type: [String],
    },
    Comments:[{
        username: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        commentedAt: {
            type: Date,
            default: Date.now
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },



})

module.exports = mongoose.model('BlogPost', blogPostSchema)