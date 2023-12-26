import "./style.css";
import { ITodoItem } from "./TodoItem";

import { TodoList } from "./TodoLists";
import { TodoItem } from "./TodoItem";

const addTodo = document.querySelector(".addTodo") as HTMLDivElement;
const addTodoForm = document.querySelector(".addTodo__form") as HTMLFormElement;
const todoTitleInput = document.querySelector(".addTodo__form--title") as HTMLInputElement;
const todoDescTextarea = document.querySelector(".addTodo__form--desc") as HTMLTextAreaElement;

const remainingField = document.getElementById("remaining") as HTMLDivElement;
const completedField = document.getElementById("completed") as HTMLDivElement;

const homeNavItem = document.querySelector(".header__nav--item") as HTMLElement;
const completedNavItem = document.querySelector(".header__nav--item.completed") as HTMLElement;
const remainingNavItem = document.querySelector(".header__nav--item.remaining") as HTMLElement;

const todoList = new TodoList();

homeNavItem.classList.add("active");
remainingField.style.display = "block";
completedField.style.display = "block";

addTodoForm.addEventListener("submit", function (event) {
	event.preventDefault();

	const title = todoTitleInput.value.trim();
	const description = todoDescTextarea.value.trim();

	todoList.addItem({ title, description });

	// Clear input fields after adding a task
	todoTitleInput.value = "";
	todoDescTextarea.value = "";

	renderTodoList();
});

function renderTodoList() {
	const items = todoList.getItems();
	remainingField.innerHTML = "";
	items.forEach(item => {
		const todoItem = createTodoItem(item.title, item.description);
		remainingField.appendChild(todoItem);
	});
}

homeNavItem.addEventListener("click", function () {
	homeNavItem.classList.add("active");
	completedNavItem.classList.remove("active");
	remainingNavItem.classList.remove("active");

	addTodo.style.display = "block";

	completedField.style.display = "block";
	remainingField.style.display = "block";
});

completedNavItem.addEventListener("click", function () {
	completedNavItem.classList.add("active");
	homeNavItem.classList.remove("active");
	remainingNavItem.classList.remove("active");

	completedField.style.display = "block";
	addTodo.style.display = "none";
	remainingField.style.display = "none";
});

remainingNavItem.addEventListener("click", function () {
	remainingNavItem.classList.add("active");
	completedNavItem.classList.remove("active");

	remainingField.style.display = "block";
	addTodo.style.display = "none";
	completedField.style.display = "none";
});

function createTodoItem(title: string, description: string): HTMLDivElement {
	const todoItem = document.createElement("div");
	todoItem.classList.add("todo-item");
	todoItem.style.border = "1px solid #00A67E";
	todoItem.style.width = "50%";
	todoItem.style.margin = "0 auto";
	todoItem.style.padding = "10px";
	todoItem.style.marginBottom = "10px";

	const taskCheckbox = document.createElement("input");
	taskCheckbox.type = "checkbox";
	taskCheckbox.id = "taskCheckbox";
	taskCheckbox.style.marginRight = "10px";
	taskCheckbox.addEventListener("change", function () {
		if (taskCheckbox.checked) {
			moveTask(todoItem, completedField);
		} else {
			moveTask(todoItem, remainingField);
		}
	});
	todoItem.appendChild(taskCheckbox);

	const todoTitle = document.createElement("h4");
	todoTitle.textContent = title;
	todoTitle.style.margin = "0";
	todoTitle.style.fontWeight = "bold";
	todoItem.appendChild(todoTitle);

	const todoDesc = document.createElement("p");
	todoDesc.textContent = description;
	todoDesc.style.margin = "0";
	todoItem.appendChild(todoDesc);

	const item = new TodoItem(title, description);
	const deleteButton = createDeleteButton(todoItem, item);
	todoItem.appendChild(deleteButton);

	return todoItem;
}

function createDeleteButton(todoItem: HTMLDivElement, item:ITodoItem): HTMLButtonElement {
	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	// Apply CSS properties to the deleteButton
	deleteButton.style.padding = "0.5rem";
	deleteButton.style.border = "none";
	deleteButton.style.borderRadius = "4px";
	deleteButton.style.background = "#00A67E";
	deleteButton.style.color = "#fff";
	deleteButton.style.cursor = "pointer";
	deleteButton.style.transition = "background 0.3s ease-out";

	// Set the margin property of the deleteButton to auto
	deleteButton.style.margin = "auto";

	// Add a hover effect
	deleteButton.addEventListener("mouseover", function () {
		deleteButton.style.background = "#007459";
	});
	deleteButton.addEventListener("mouseout", function () {
		deleteButton.style.background = "#00A67E";
	});
	deleteButton.addEventListener("click", function () {
		todoItem.remove();
		todoList.removeItem(item);
	});
	return deleteButton;
}

function moveTask(task: HTMLDivElement, destination: HTMLDivElement) {
	task.remove();
	destination.appendChild(task);
}

const searchInput = document.getElementById("search") as HTMLInputElement;

searchInput.addEventListener("keyup", function(event: KeyboardEvent) {
	const searchValue = (event.target as HTMLInputElement).value.toLowerCase();

	const todoItems = document.querySelectorAll(".todo-item");
	todoItems.forEach(function(item: Element) {
		const divItem = item as HTMLDivElement;
		const titleElement = divItem.querySelector("h4") as HTMLElement;
		const descElement = divItem.querySelector("p") as HTMLElement;

		const title = titleElement?.textContent?.toLowerCase() || "";
		const description = descElement?.textContent?.toLowerCase() || "";

		if (title.includes(searchValue) || description.includes(searchValue)) {
			divItem.style.display = "block";
		} else {
			divItem.style.display = "none";
		}
	});
});
