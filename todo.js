const form = document.querySelector('#addForm');
const taskList = document.querySelector('#items');
const taskInput = document.querySelector('.input');

loadEventListeners();

function loadEventListeners(){
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
}

function addTask(e){
  if(taskInput.value === ''){
    alert('add a task');
  }
  const li = document.createElement('li');
  li.className = 'list-group-item'

  const doneBtn = document.createElement('div');
  doneBtn.className = 'doneBtn';
  li.appendChild(doneBtn);

  const flexDiv = document.createElement('div');
  flexDiv.className = 'flex-div';
  li.appendChild(flexDiv);

  const h3 = document.createElement('h3');
  h3.className = 'todo';
  h3.innerHTML = taskInput.value;
  li.appendChild(h3);

  taskList.appendChild(li);

  

  taskInput.value = '';

  e.preventDefault()
}
function removeTask(e) {
  if(e.target.classList.contains('doneBtn')){
    e.target.parentElement.remove();
  }
}
