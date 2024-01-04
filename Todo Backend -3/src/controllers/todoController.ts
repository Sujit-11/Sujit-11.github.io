// TodoController.ts
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

export const getTodoById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.body.userid;
    const todo = TodoService.getTodoById(parseInt(req.params.id),userId);
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
    // const todo = TodoService.createTodo(
    //   req.body.title,
    //   req.body.completed,
    //   req.body.userid
    // );
    const todo = TodoService.createTodo(
      createData(req.body)
    );
    res.status(201).json({todo});
  } catch (err) {
    next(err);
  }
};

// export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const todo = TodoService.updateTodo(
//       parseInt(req.params.id),
//       req.body.title,
//       req.body.completed
//     );
//     res.json(todo);
//   } catch (err) {
//     next(err);
//   }
// };
export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = TodoService.updateTodo(
      parseInt(req.params.id),
      createData(req)
    );
    res.json(todo);
  } catch (err) {
    next(err);
  }
};

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.body.userid;
    const todo = TodoService.deleteTodo(parseInt(req.params.id),userId);
    res.json(todo);
  } catch (err) {
    next(err);
  }
};

const createData = (req: Request) => {
  const user = (req as CustomRequest).user;
  return { ...req.body, userid: user.id };
};

const responseTodo = (todo: Todo | undefined) => {
  if (!todo) return null;
  return {
    title: todo.title,
    completed: todo.completed,
  };
};