console.log('Hello World!');
const list = document.getElementById('list');
const addBtn = document.getElementById('add-btn');
const newItem = document.getElementById('new-item');
const filterTodo = document.getElementById('filter-todo')
const searchBar = document.getElementById('search-bar')
let t = document.getElementsByClassName('2');
let checked = false;


//Event listeners
addBtn.addEventListener('click', addItem);
list.addEventListener('click', deleteItem)
filterTodo.addEventListener('change', filterToDo);


//Functions
function addItem(event) {
  // body...
  event.preventDefault();
  
  if (newItem.value != "" && newItem.value.replace(/ /g,"") != "") {
  const item = document.createElement('div')
  item.classList.add('item');
  item.innerHTML = '<input type="checkbox" name="item-check" class="item-check" />';
  
  
  const checkBox = document.createElement('label');
  checkBox.classList.add('check-mark');
  checkBox.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="mark" width="16" height="16" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z" /></svg>';
    item.appendChild(checkBox);
  
  const cancel = document.createElement('label');
  cancel.classList.add('cancel');
    item.appendChild(cancel);
    
  const itemValue = document.createElement('p');
  itemValue.classList.add('item-value');
  itemValue.innerText = newItem.value;
  newItem.value = '';
    item.appendChild(itemValue);
  
  const delBtn = document.createElement('label');
  delBtn.classList.add('del-btn');
  delBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="delbtn" width="18" height="18" viewBox="0 0 24 24"><path d="M22 11v2h-20v-2h20zm-22-2v6h24v-6h-24z"/></svg>';
    item.appendChild(delBtn);
 /* item.innerHTML = '<input type="checkbox" name="item-check" class="item-check" /><label class="check-mark" for="item-check"><svg xmlns="http://www.w3.org/2000/svg" id="check" width="16" height="16" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z" /></svg></label><label class="cancel">&nbsp;_________________________</label><p class="item-value">vvvv</p><svg xmlns="http://www.w3.org/2000/svg" class="delbtn" width="18" height="18" viewBox="0 0 24 24"><path d="M22 11v2h-20v-2h20zm-22-2v6h24v-6h-24z"/></svg>';
 
 */
  list.appendChild(item);
 refreshTodo(filterTodo.value, item);
 
  }else {
  searchBar.classList.add('shake');
  searchBar.addEventListener('animationend' ,function s() {
    searchBar.classList.remove('shake');
    newItem.value = '';
  })
  }
}

function deleteItem(e) {
 
 let i = e.target
 if(i.classList[0] === "del-btn"){
   let dpar= i.parentElement;
   dpar.classList.add('bubble');
   dpar.addEventListener('transitionend', function rem() {
     // body...
     dpar.remove();
   })
 }
 if(i.classList[0] === "item-check" && i.checked){
   
   let cpar = i.parentElement;
   let t = cpar.getElementsByClassName('check-mark');
   t[0].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.312-9.688l.515 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm12.52 3.317v6.594h-16v-16h15.141c.846-.683 1.734-1.341 2.691-2h-19.832v20h20v-11.509c-.656.888-1.318 1.854-2 2.915z"/></svg>'
   cpar.classList.add('complete')
 } else if (i.classList[0] === "item-check" && !i.checked) {
   let cpar = i.parentElement;
   let t = cpar.getElementsByClassName('check-mark');
   t[0].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="mark" width="16" height="16" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z" /></svg>'
   cpar.classList.remove('complete')
 } 
}

function filterToDo(event) {
  // body...
  const todos = list.childNodes;
  
  todos.forEach(function(todo) {
    // body...
console.log(event);
    refreshTodo(event.target.value, todo) 
  })
}

function refreshTodo(arg, todo) {
  // body...
  switch (arg) {
    case 'all':
      // code
      todo.style.display = 'flex'
      break;
    case "completed":
      // code
      if (todo.classList.contains('complete')) {
  
        todo.style.display = 'flex'
      }
      else {
        todo.style.display = 'none'
      }
      break;
    case "uncompleted":
      // code
      if (!todo.classList.contains('complete')) {
  
        todo.style.display = 'flex'
      }
      else {
        todo.style.display = 'none'
      }
      break;
  
  
  }
}

function saveLocalTodos(todo) {
  // body...
  let todos;
  if (true) {
    
  } else {
    
  }
}
/*

          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.312-9.688l.515 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm12.52 3.317v6.594h-16v-16h15.141c.846-.683 1.734-1.341 2.691-2h-19.832v20h20v-11.509c-.656.888-1.318 1.854-2 2.915z"/></svg> -->
          
          */
          
          
          