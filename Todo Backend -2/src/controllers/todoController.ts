// TodoController.ts
import { Request, Response, NextFunction } from 'express';
import { TodoService } from '../service/todoService';

export const getTodos = (req: Request, res: Response, next: NextFunction) => {
  try {
    const todos = TodoService.getTodos();
    res.json(todos);
  } catch (err) {
    next(err);
  }
};

export const getTodoById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = TodoService.getTodoById(parseInt(req.params.id));
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).send({ error: 'Todo not found' });
    }
  } catch (err) {
    next(err);
  }
};


export const createTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = TodoService.createTodo(
      req.body.title,
      req.body.completed,
      req.body.userid
    );
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
};

export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = TodoService.updateTodo(
      parseInt(req.params.id),
      req.body.title,
      req.body.completed
    );
    res.json(todo);
  } catch (err) {
    next(err);
  }
};

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = TodoService.deleteTodo(parseInt(req.params.id));
    res.json(todo);
  } catch (err) {
    next(err);
  }
};
