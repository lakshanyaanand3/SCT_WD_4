// Select input, button, and task list elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
const addTask = () => {
    const taskText = taskInput.value.trim(); // Get input value and trim whitespace

    if (taskText === "") {
        alert("Please enter a task!"); // Prevent adding empty tasks
        return;
    }

    // Create a new list item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.textContent = taskText;

    // Add a delete button to the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => taskItem.remove()); // Remove task when clicked

    // Append delete button to the task
    taskItem.appendChild(deleteBtn);

    // Add the new task to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
};

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Allow adding tasks with the "Enter" key
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
