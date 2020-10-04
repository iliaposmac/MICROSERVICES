import bodyParser from 'body-parser'
import express from 'express'
import { MainRoute } from './routes/main.js'
import { db } from './configuration/db.js'

const app = express()

app.use(express.urlencoded({extended: false}))

app.use(bodyParser.json())

const dbConnection = async()=>{
    const dbConnect = await db
    if(db){
        console.log('Connected (books service)');
    }else{
        console.log("Error");
    }
}

dbConnection()

app.use('/', MainRoute )

app.listen(9001, ()=>console.log('Books service started on port 9001'))