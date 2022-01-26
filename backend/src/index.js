const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

// Database setup
mongoose.connect('mongodb+srv://sistemaupload:sistemaupload@cluster0.db2nz.mongodb.net/upload?retryWrites=true&w=majority',() => {
	console.log('Mongo conectado')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(require('./routes.js'))

app.listen(3000, (req,res) => {
	console.log('Servidor rodando')
})

//mongodb+srv://sistemaupload:<password>@cluster0.db2nz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//user: sistemaupload
//senha: sistemaupload

//mongodb+srv://sistemaupload:<password>@cluster0.db2nz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority