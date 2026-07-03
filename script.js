// Select HTML Elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Load tasks from LocalStorage when the application starts
document.addEventListener('DOMContentLoaded', loadTasks);

// Event listener for adding a task via button click
addBtn.addEventListener('click', addTask);

// Event listener for adding a task via pressing the 'Enter' key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a valid task!');
        return;
    }

    createTaskElement(taskText);
    saveTaskToLocalStorage(taskText);
    taskInput.value = ''; // Clear input field
}

function createTaskElement(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    
    deleteBtn.addEventListener('click', () => {
        li.remove();
        removeTaskFromLocalStorage(text);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// LocalStorage Helper Functions
function getTasksFromStorage() {
    let tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function saveTaskToLocalStorage(task) {
    let tasks = getTasksFromStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = getTasksFromStorage();
    tasks.forEach(task => createTaskElement(task));
}

function removeTaskFromLocalStorage(taskToRemove) {
    let tasks = getTasksFromStorage();
    // Filter out the deleted task
    tasks = tasks.filter(task => task !== taskToRemove);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
