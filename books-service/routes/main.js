import express from 'express'
import { schema } from '../models/book.model.js'
import mongoose from 'mongoose'
const route = express.Router()

route.get('/', async(req, res)=>{
    res.send('Hello from main route')
})

route.post('/add', async(req, res)=>{
    const {name,author, shortDescr} = req.body
    try {
        const book = new schema({
            name: name,
            author: author,
            shortDescr: shortDescr
        })
        await book.save()
        res.status(200).json(book)
    } catch (error) {
        res.status(501).json({
            message: error
        })
    }
})

route.get('/books', async(req, res)=>{
    try {
        const books = await schema.find()
        if(!books){
            return res.status(500).json({
                message: "books not found"
            })
        }
        return res.status(200).json({
            books: books
        })
    } catch (error) {
        return res.status(501).json(error.message)
    }
})

route.get('/books/:id', async(req, res)=>{
    const id = req.params.id
    console.log(id);
    try {
        const book = await schema.findById({_id: id})
        if(!book){
            return res.status(501).json({
                message: "not book with id " + id
            })
        }
        console.log(book);
        return res.status(200).json({
            book: book
        })    
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})


export {route as MainRoute}
