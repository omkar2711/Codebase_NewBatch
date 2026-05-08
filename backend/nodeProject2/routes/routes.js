import { Router } from "express";

const todoRouter = Router();

const todos = [];

todoRouter.get("/", (req, res) => {
  res.json(todos);
});

todoRouter.post("/", (req, res) => {
  const  title  = req.body.text;
  console.log("Received new todo:", title );
  const newTodo = { id: Date.now(), title };
  console.log("Created new todo:", newTodo);
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

export default todoRouter;

