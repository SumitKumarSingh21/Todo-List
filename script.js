// Removed invalid function declaration
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    }
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = '';
}
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
const editBtn = document.getElementById('edit-btn');
editBtn.addEventListener('click', function() {
    const taskList = document.getElementById('task-list');
    const tasks = taskList.getElementsByTagName('li');
    for (let i = 0; i < tasks.length; i++) {
        const taskText = tasks[i].textContent.replace('Delete', '').trim();
        const newTaskText = prompt('Edit task:', taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            tasks[i].firstChild.textContent = newTaskText + ' ';
        }
    }
});
//checlist system adding
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    const listItem = document.createElement('li');

    // Create checkbox for checklist system
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '10px';
    checkbox.onclick = function() {
        if (checkbox.checked) {
            listItem.style.textDecoration = 'line-through';
            listItem.style.color = '#888';
        } else {
            listItem.style.textDecoration = 'none';
            listItem.style.color = '#444';
        }
    };

    // Create span for task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = '';
}

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    })});

