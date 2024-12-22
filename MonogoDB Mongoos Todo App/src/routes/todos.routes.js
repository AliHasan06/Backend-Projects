import express from "express"

import { addTodo,  deleteTodo,  editTodo,  getAllTodo, singleTodoWithId } from "../controllers/todos.controller.js"
const router = express.Router()
router.post("/todo", addTodo)
router.get("/todos", getAllTodo)
router.get("/todo/:id", singleTodoWithId)
// router.delete('/deleteTodo/:id',deleteTodo)
router.delete("/todo/:id", deleteTodo);
router.put("/todo/:id", editTodo);

// router.post('/tododelte',deleteTodo)
export default router
