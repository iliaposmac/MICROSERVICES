import mongoose from 'mongoose'

const URL = 'mongodb+srv://@cluster0.2po72.mongodb.net/Microservices?retryWrites=true&w=majority'

const dbConnect = () =>{
    mongoose.connect(URL, {})
}

export {dbConnect as db}
