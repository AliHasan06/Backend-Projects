import express from 'express'
import connectDB from './src/db/index.js'
import dotenv from 'dotenv'
import cors from 'cors'
import CourseRouter from './src/routes/course.routes.js'
import StudentRouter from './src/routes/student.route.js'
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1',CourseRouter)
app.use('/api/v1',StudentRouter)
connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });