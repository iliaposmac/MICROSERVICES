import express from 'express'
import {db} from './configuration/db.js'
import { userSchema } from './models/user.js'
import bodyParser from 'body-parser'
import { UsersRoute } from './routes/users.js'
const app = express()
 
app.use(bodyParser.json())
app.use('/', UsersRoute)


const start = async()=>{
    try {
        const connectToDb = await db
        if(!connectToDb){
           throw new Error('Cant connect to database')
        }
        console.log("Connected to mongoDb (User service)")
        app.listen(9002, ()=>{
            console.log('Users service is started on port 9002')
        })
    } catch (error) {
        console.log(error)
    }

}
start()

