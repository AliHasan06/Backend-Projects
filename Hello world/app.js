// const express = require('express')
import express from 'express'
const app = express()
const port = 3000

let users = []
app.get('/', (req, res) => {
  res.send('Hello World!')


})

app.post('/users', (req, res) => {
  const { title } = require.body
  if (!{ title }) {
    req.status(400).json({
      message: "data required"
    })
    return
  }

})


app.get('/users/:id', (req, res) => {
  const { id } = req.params.id
  const singleuser = users.find((users) => req.params.id === id

  )
if(!users){
res.status(404).send({message:"user not found"})
}else{
  res.send(users)
}

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
