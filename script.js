const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const themePicker = document.getElementById('theme-picker');

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    loadSavedTheme();
});

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

themePicker.addEventListener('input', (e) => {
    const selectedColor = e.target.value;
    applyTheme(selectedColor);
    localStorage.setItem('savedTheme', selectedColor);
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a valid task!');
        return;
    }
    createTaskElement(taskText);
    saveTaskToLocalStorage(taskText);
    taskInput.value = ''; 
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
    tasks = tasks.filter(task => task !== taskToRemove);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function applyTheme(color) {
    document.body.style.setProperty('--bg-color', color);
}

function loadSavedTheme() {
    const savedColor = localStorage.getItem('savedTheme');
    if (savedColor) {
        applyTheme(savedColor);
        themePicker.value = savedColor;
    }
}
