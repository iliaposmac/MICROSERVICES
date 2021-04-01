import mongoose from 'mongoose'

const URL = 'mongodb+srv://@cluster0.2po72.mongodb.net/Microservices?retryWrites=true&w=majority'

const db = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export { db }
