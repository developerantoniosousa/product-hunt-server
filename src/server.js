const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const server = express()
mongoose.connect('mongodb://localhost:27017/producthunt', {
  useCreateIndex: true,
  useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use('/api', require('./routes'))

server.listen(3001);