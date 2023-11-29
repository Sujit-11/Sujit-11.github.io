    const addTodoForm = document.querySelector(".addTodo__form");
    const todoTitleInput = document.querySelector(".addTodo__form--title");
    const todoDescTextarea = document.querySelector(".addTodo__form--desc");
    const remainingField = document.getElementById("remaining");
    const completedField = document.getElementById("completed");
  
    const completedNavItem = document.querySelector(".header__nav--item.completed");
    const remainingNavItem = document.querySelector(".header__nav--item.remaining");
  
    // Initial setup: Show remaining tasks and hide completed tasks
    remainingNavItem.classList.add("active");
    remainingField.style.display = "block";
    completedField.style.display = "none";
  
    addTodoForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const title = todoTitleInput.value.trim();
      const description = todoDescTextarea.value.trim();
  
      if (title === "") {
        alert("Please enter a task title");
        return;
      }
  
      const todoItem = createTodoItem(title, description);
      remainingField.appendChild(todoItem);
  
      // Clear input fields after adding a task
      todoTitleInput.value = "";
      todoDescTextarea.value = "";
    });
  
    completedNavItem.addEventListener("click", function () {
      completedNavItem.classList.add("active");
      remainingNavItem.classList.remove("active");
  
      completedField.style.display = "block";
      remainingField.style.display = "none";
    });
  
    remainingNavItem.addEventListener("click", function () {
      remainingNavItem.classList.add("active");
      completedNavItem.classList.remove("active");
  
      remainingField.style.display = "block";
      completedField.style.display = "none";
    });
  
    function createTodoItem(title, description) {
      const todoItem = document.createElement("div");
      todoItem.classList.add("todo-item");
  

      const todoTitle = document.createElement("h4");
      todoTitle.textContent = title;
  
      const todoDesc = document.createElement("p");
      todoDesc.textContent = description;
  
      const completeButton = document.createElement("button");
      completeButton.textContent = "Mark as Completed";
      completeButton.addEventListener("click", function () {
        moveTask(todoItem, completedField);
      });
  
      const remainingButton = document.createElement("button");
      remainingButton.textContent = "Mark as Remaining";
      remainingButton.addEventListener("click", function () {
        moveTask(todoItem, remainingField);
      });
  
      todoItem.appendChild(todoTitle);
      todoItem.appendChild(todoDesc);
      todoItem.appendChild(completeButton);
      todoItem.appendChild(remainingButton);
  
      return todoItem;
    }
  
    function moveTask(task, destination) {
      task.remove();
      destination.appendChild(task);
    }
  