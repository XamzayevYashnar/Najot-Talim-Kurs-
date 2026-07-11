import {Schema, model, Types} from 'mongoose'

const userSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true}
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

userSchema.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'author'
})

const User = model('User', userSchema)

export {
    User
}