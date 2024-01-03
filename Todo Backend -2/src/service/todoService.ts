import todos from '../data/Todos';

export class TodoService {
  static getTodos() {
    return todos;
  }

  static getTodoById(id: number) {
    return todos.find((todo) => todo.id === id);
  }

  static createTodo(title: string, completed: boolean, userid: number) {
    const todo = {
      id: todos.length + 1,
      title: title,
      completed: completed,
      userid: userid,
    };
    todos.push(todo);
    return todo;
  }

  static updateTodo(id: number, title: string, completed: boolean) {
    const todo = todos.find((t) => t.id === id);
    if (!todo) throw new Error('The todo with the given ID was not found.');
    todo.title = title;
    todo.completed = completed;
    return todo;
  }

  static deleteTodo(id: number) {
    const todo = todos.find((t) => t.id === id);
    if (!todo) throw new Error('The todo with the given ID was not found.');
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    return todo;
  }
}
