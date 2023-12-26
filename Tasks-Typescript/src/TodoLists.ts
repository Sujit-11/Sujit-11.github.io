import { ITodoItem, TodoItem } from "./TodoItem";

interface ITodoList {
    items: ITodoItem[];
    addItem(item: ITodoItem): void;
    removeItem(item: ITodoItem): void;
    getItems(): ITodoItem[];
}

export class TodoList implements ITodoList {
	items: TodoItem[] = [];

	addItem(item: ITodoItem) {
		this.items.push(new TodoItem(item.title, item.description));
	}

	removeItem(item: ITodoItem) {
		const index = this.items.findIndex(i => i.title === item.title && i.description === item.description);
		if (index !== -1) {
			this.items.splice(index, 1);
		}
	}

	getItems(): TodoItem[] {
		return this.items;
	}
}
