const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
})

const PORT = 3000

var usersArray = []

io.on('connection', (socket) => {
  console.log(`New client ID: ${socket.id}`)
  usersArray.push(socket.id)
  io.emit('users-update', usersArray)

  socket.on('submit-changes', (data) => {
    socket.broadcast.emit('broadcast-changes', data)
    console.log(data)
  })

  socket.on('disconnect', (client) => {
    console.log('Client disconnected')
    usersArray = usersArray.filter((user) => user !== socket.id)
    socket.broadcast.emit('users-update', usersArray)
  })
})

server.listen(PORT, () => {
  console.log(`listening on port: http://localhost:${PORT}`)
})
