// script.js

// Selecting DOM elements
const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Event listener for the "Add Task" button
addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item (li) element
    const listItem = document.createElement("li");

    // Create a text node with the task input value
    const taskNode = document.createTextNode(taskText);

    // Create a delete button for the task
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(listItem);  // Remove the task when the delete button is clicked
    });

    // Append the task text and delete button to the list item
    listItem.appendChild(taskNode);
    listItem.appendChild(deleteBtn);

    // Append the list item to the task list (ul)
    taskList.appendChild(listItem);

    // Clear the input field after adding the task
    taskInput.value = "";
});
