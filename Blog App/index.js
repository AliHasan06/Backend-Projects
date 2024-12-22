
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import connectDB from './src/db/index.js';
import cookieParser from 'cookie-parser';
import useRouters from './src/routes/users.route.js'
const app = express()

dotenv.config()
app.use(cors())
app.use(express.json());
app.use(cookieParser())

app.use('/api/v1',useRouters)

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