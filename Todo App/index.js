// const express = require('express') //Common JS
import express from "express" // Module JS
const app = express()
const port = 3000


app.use(express.json())


const UsersArray = []


app.get('/', (req, res) => {
res.send('Hello Worxcscskcbkbld')
  
})

app.post('/user',(req,res)=>{
  const {title} = req.body
if (!title) {
  res.status(400).json({
    message:"Title is required"
  });
return
}


UsersArray.push({
  title,
  id:Date.now(),
})
res.status(201).json({
  message: "user is created",
  data:UsersArray,
});

})



//Get All Users
app.get("/users", (req, res) => {
  res.status(200).json({
    data: UsersArray,
  });
});

//Get single User

app.get('/user/:id',(req,res)=>{

const {id} = req.params;
const index = UsersArray.findIndex((item)=>item.id === +id)

if (index === -1) {
  res.status(404).json({
    message:"User not found"
  });
  return
}
res.status(200).json({
  data:UsersArray[index]
})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});