const path = require('path')
const express = require('express')
const server = express()

const start = require('./routes/active')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/active', start)

module.exports = server
