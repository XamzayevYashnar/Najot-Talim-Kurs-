import { Schema, model } from "mongoose";

const book = new Schema({
    name: {type: String},
    author: {type: String},
}, {
    timestamps: true,
    versionKey: false
})

export default model('Book', book)