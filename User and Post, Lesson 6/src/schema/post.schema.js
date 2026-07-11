import {Schema, model, Types, mongo} from 'mongoose'

const postSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: Types.ObjectId, ref: 'User', required: true}
}, {
    timestamps: true,
    versionKey: false,
})

const Post = model('Post', postSchema)

export {
    Post
}