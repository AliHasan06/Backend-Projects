import mongoose from "mongoose";
import Todos from "../models/todos.models.js"
import { json } from "express";


//  Create Todo

const addTodo = (req, res) => {

    const { title, description } = req.body;

    if (!title || !description) {
        res.status(400).json({
            message: "Enter title & description"
        })
        return
    }

    const todo = Todos.create({
        title,
        description,
    });
    res.status(201).json({
        message: "User added to database suceessfully"
    })


}

//  Get All Todo 

const getAllTodo = async (req, res) => {

    const todos = await Todos.find({})
    res.status(200).json(todos)
}


//  Get Todo with ID
const singleTodoWithId = async (req, res) => {
    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: "Invalid Id"
        })
    }
    const todo = await Todos.findById(id)
    if (!todo) {
        res.status(404).json({
            message: "Todo not found !"
        })
        return
    }

    res.status(200).json(todo)

}








// delete Todo

const deleteTodo = async (req, res) => {

    const { id } = req.params

    const todo = await Todos.findOneAndDelete({ _id: id })
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: "Id is not Valid"
        })

    }


    if (!todo) {
        res.status(404).json({
            message: "No todo Found"
        })
        return
    }


    res.status(200).json({
        message: "Todo delted successfully",
        todo,
    })


}

const editTodo = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(200).json({
            message: "Not a Valid ID"
        })

    }
// ID  Check 
    // console.log(id)

    // check todo exist or not
    try {
        const todos = await Todos.findById(id)
        if (!todos) {
            return res.status(404).json({
                message: "No todo Found"
            })
        }

        const updatedtodo = await Todos.findOneAndUpdate(

            { _id: id },
            {
                ...req.body
            },

        );



        res.status(200).json({
            message: "Todo Updated successfully",
            updatedtodo
        })


    } catch (error) {
        console.log(error);
        
    }

    // if (!todos) {
    //     return res.status(404).json({
    //         message: "No todo Found"
    //     })
    // }

    // if (title || description) {

    //     const updatedtodo = await Todos.findOneAndUpdate(

    //         { _id: id },
    //         {
    //             ...req.body
    //         },

    //     );



    //     res.status(200).json({
    //         message: "Todo Updated successfully",
    //         updatedtodo
    //     })





    // }

    // if (!title || !description) {
    //     return res.status(400).json({
    //         message: "no feilds to update"
    //     })
    // }

}


export { addTodo, getAllTodo, singleTodoWithId, deleteTodo, editTodo };