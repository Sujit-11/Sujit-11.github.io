import { Request, Response, NextFunction } from 'express';
import { TodoService } from '../service/todoService';
import { Todo } from "../model/TodoModel";
import { CustomRequest } from "../interfaces/CustomRequest";

export const getTodos =async(req: Request, res: Response, next: NextFunction) => {
  try {
    const todos = (await TodoService.getTodos()).map((todo)=>responseTodo(todo));
    res.json({todos});
  } catch (err) {
    next(err);
  }
};

export const getTodoById = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.body.userid;
    const todo = (await TodoService.getTodoById(parseInt(req.params.id),userId));
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).send({ error: 'Todo not found' });
    }
  } catch (err) {
    next(err);
  }
};


export const createTodo = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = (await TodoService.createTodo(
      createData(req)
    ));
    res.status(201).json({todo});
  } catch (err) {
    next(err);
  }
};

export const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await TodoService.updateTodo(
      parseInt(req.params.id),
      createData(req)
    );
    res.json(todo);
  } catch (err) {
    next(err);
  }
};

export const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.body.userid;
    const todo = await TodoService.deleteTodo(parseInt(req.params.id),userId);
    res.json(todo);
  } catch (err) {
    next(err);
  }
};

const createData = (req: Request) => {
  console.log()
  const user = (req as CustomRequest).user;
  console.log(user);
  return { ...req.body, userid: user.id };
};

const responseTodo = (todo: Todo | undefined) => {
  if (!todo) return null;
  return {
    title: todo.title,
    completed: todo.completed,
  };
};