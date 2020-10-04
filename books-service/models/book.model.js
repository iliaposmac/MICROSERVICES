import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BooksSchema = new Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    shortDescr: {
        type: String,
        required: true
    }

})

const schema = mongoose.model('Books', BooksSchema)

export {schema}