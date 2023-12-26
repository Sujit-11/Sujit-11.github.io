export interface ITodoItem {
    title: string;
    description: string;
}

export class TodoItem implements ITodoItem {
	title: string;
	description: string;

	constructor(title: string, description: string) {
		this.title = title;
		this.description = description;
	}
}
