function createTaskElement(taskText){
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    
    checkbox.type = 'checkbox';
    const label = document.createElement('label');
    
    label.innerText = taskText;
    const editInput = document.createElement('input');
    editInput.type = 'text';
    
    editInput.style.display = 'none';
    const editButton = document.createElement('button');
    
    editButton.innerText = 'Edit';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}

function addTask(event){
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === ''){
        return
    };
    const listItem = createTaskElement(taskText);
    const taskList = document.getElementById('taskList');
    
    taskList.appendChild(listItem);
    addEditTaskListener(listItem);
    addDeleteTaskListener(listItem);
    taskInput.value = '';
}

function editTask(event){
    const listItem = this.parentNode;
    const label = listItem.querySelector('label');
    const editInput = listItem.querySelector('input[type=text]');
    const editButton = listItem.querySelector('button');
    const isEditing = listItem.classList.contains('editing');
    
    if (isEditing) {
        label.innerText = editInput.value;
        editButton.innerText = 'Edit';
    } else {
        editInput.value = label.innerText;
        editButton.innerText = 'Save';
    }
    editInput.style.display = isEditing ? 'none' : 'inline';
    label.style.display = isEditing ? 'inline' : 'none';
    listItem.classList.toggle('editing');
}

function deleteTask(){
    const listItem = this.parentNode;
    const ul = listItem.parentNode;
    ul.removeChild(listItem);
}

function addEditTaskListener(listItem){
    const editButton = listItem.querySelector('button');
    editButton.addEventListener('click', editTask);
}

function addDeleteTaskListener(listItem){
    const deleteButton = listItem.querySelector('button:last-child');
    deleteButton.addEventListener('click', deleteTask);
}

document.getElementById('taskForm').addEventListener('submit', addTask);