
import express from "express"
import connectDB from "./src/db/index.js"
import dotenv from "dotenv"
import cors from "cors"
import todosRoutes from "./src/routes/todos.routes.js"
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())




app.get('/', (req, res) => {
  res.send('Hello World!')
})  

// route
app.use("/api/v1", todosRoutes);



connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });