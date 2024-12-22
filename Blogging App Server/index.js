import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import UserRoute from './src/routes/user.route.js'
import Blogroute from './src/routes/blogs.route.js'



import connectDB from './src/db/index.js'
const app = express()
const port = 3000



app.use(express.json())
app.use(cors())
dotenv.config()

app.use("/api/v1",UserRoute)
app.use("/api/v1",Blogroute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });

