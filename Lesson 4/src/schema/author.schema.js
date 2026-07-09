import { Schema, model, Types } from 'mongoose'

const author = new Schema({
    id: {type: Types.ObjectId},
    fullName: {type: String},
    birthDate: {type: Date},
    nick: {type: String, unique: true}
}, {
    timestamps: true, 
    versionKey: false
})

export default model('Author', author) 