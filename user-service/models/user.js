import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
})

export const userSchema = mongoose.model("Users", UserSchema)