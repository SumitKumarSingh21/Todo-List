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
            taskSpan.style.textDecoration = 'line-through';
            taskSpan.style.color = '#888';
        } else {
            taskSpan.style.textDecoration = 'none';
            taskSpan.style.color = '#444';
        }
    };

    // Create span for task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.style.marginLeft = '10px';
    editButton.onclick = function() {
        if (editButton.textContent === 'Edit') {
            // Switch to edit mode
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = taskSpan.textContent;
            editInput.style.marginRight = '10px';
            listItem.insertBefore(editInput, taskSpan);
            listItem.removeChild(taskSpan);
            editButton.textContent = 'Save';
        } else {
            // Save edited task
            const editInput = listItem.querySelector('input[type="text"]');
            taskSpan.textContent = editInput.value.trim() || taskSpan.textContent;
            listItem.insertBefore(taskSpan, editInput);
            listItem.removeChild(editInput);
            editButton.textContent = 'Edit';
        }
    };

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
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
    }) ;
});
