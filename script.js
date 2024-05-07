const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Add event listener for the form submission
todoForm.addEventListener('submit', (e) => {
    // When submitted something page is refreshed and when page is ref. content will vanish as a result of ref.
    e.preventDefault();  // So this is used to prevent it.
    addTask();
});

// Add a new task
function addTask() {
  const task = todoInput.value.trim();
  if (task) {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `${task} <button class="edit-btn" onclick="editTask(this)"><b>: Edit</b></button>
    <button class="delete-btn" onclick="deleteTask(this)"><b>: Delete</b></button>`;
    todoList.appendChild(taskElement);
    todoInput.value = ''; // Clear the input box

  }
}

// Delete a task
function deleteTask(button) {
  const taskElement = button.parentElement;
  todoList.removeChild(taskElement);
}

function editTask(button){
    
}