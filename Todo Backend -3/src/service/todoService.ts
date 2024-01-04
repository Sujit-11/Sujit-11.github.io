import todos from '../data/Todos';
import * as todoRepo from "../Repositories/TodoRepo";
import { Todo } from "../model/TodoModel";

export class TodoService {
  static getTodos() {
    return todoRepo.getAllTodos();
  }

  static getTodoById(id: number, userid:number) {
    // return todos.find((todo) => todo.id === id);
    if (!todos) throw new Error("Todos not found");
    return todoRepo.getTodoById(id,userid);
  }

  // static createTodo(title: string, completed: boolean, userid: number) {
  //   const todo = {
  //     id: todos.length + 1,
  //     title: title,
  //     completed: completed,
  //     userid: userid,
  //   };
  //   todos.push(todo);
  //   return todo;
  // }
  static createTodo(todo:Todo){
    const ntodos = todoRepo.addTodo(todo);
    return ntodos;
  }

  // static updateTodo(id: number, title: string, completed: boolean) {
  //   const todo = todos.find((t) => t.id === id);
  //   if (!todo) throw new Error('The todo with the given ID was not found.');
  //   todo.title = title;
  //   todo.completed = completed;
  //   return todo;
  // }
  static updateTodo(id:number,todo: Todo){
    const foundTodo = todoRepo.getTodoById(id,todo.userid);
    if(!foundTodo) throw new Error("Todo not found");
    return todoRepo.updateTodo(id,todo);
  }

  // static deleteTodo(id: number) {
  //   const todo = todos.find((t) => t.id === id);
  //   if (!todo) throw new Error('The todo with the given ID was not found.');
  //   const index = todos.indexOf(todo);
  //   todos.splice(index, 1);
  //   return todo;
  // }
  static deleteTodo(id: number,userid:number) {
    const todo = todoRepo.getTodoById(id, userid);
    if (!todo) throw new Error('The todo with the given ID was not found.');
    return todoRepo.deleteTodo(id);
  }
}
