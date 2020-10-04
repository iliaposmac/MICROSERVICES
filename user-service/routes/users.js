import express from 'express'
const route = express.Router()
import fetch from 'node-fetch'
import axios from '../configuration/axios.config.js'

route.get('/books', async(req, res)=>{
    try {

        // const books = await fetch('http://localhost:9001/books', {
        //     method: "get"
        // })
        // const data = await books.json()
        
        const response = await axios.get('/books')
        
        return res.status(response.status).json({
            books: response.data
        })
        
    } catch (error) {
        console.log(error)
    }
})

export {route as UsersRoute}