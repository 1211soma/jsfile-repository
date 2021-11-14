'use strict'

const todo = document.getElementById('todo');
const doing = document.getElementById('doing');
const inputValue = document.querySelector('section > input');

//doingにタスクを移動
const toDoingTask =()=>{
  [...todo.querySelectorAll('.to-doing')].forEach((task)=>
  task.addEventListener('click',()=>{
    const todoTask = task.parentNode;
    const doingList = [...doing.querySelectorAll('.doing-task')].map((task)=>
    task.outerHTML);
    console.log(doingList)

    const addDoingTask =()=>{
        return `<li class="doing-task">
      <span>${todoTask.querySelector('span').innerText}</span>
      <button class="edit">編集</button>
      <button class='undo'>戻す</button>
      <button class="delete">削除</button>
      </li>`
    }

    doing.innerHTML = [...doingList,addDoingTask()].reduce((prev,current)=>
    prev + current);
    task.parentNode.remove();
    deleteTask();
    editTask();
    undo();
  }))
}

//todoに戻す
const undo =()=>{
  [...doing.querySelectorAll('.undo')].forEach((task)=>
  task.addEventListener('click',()=>{
    const doingTask = task.parentNode;
    const todoList = [...todo.querySelectorAll('.todo-task')].map((task)=>
    task.outerHTML);
    console.log(todoList)

    const addUndo =()=>{
        return  `<li class='todo-task'>
      <span>${doingTask.querySelector('span').innerText}</span>
      <button class="edit">編集</button>
      <button class='to-doing'>作業開始</button>
      <button class="delete">削除</button>
      </li>`
    }

    todo.innerHTML = [...todoList,addUndo()].reduce((prev,current)=>
    prev + current);
    task.parentNode.remove();
    deleteTask();
    editTask();
    toDoingTask();
  }))
}

// 編集
const editTask = () => [...document.querySelectorAll('.edit')].forEach
((btn) => btn.addEventListener('click', ()=> btn.parentNode.
querySelector('span').innerText = prompt('タスク名を修正できます')))



// 削除
const deleteTask = () => [...document.querySelectorAll('.delete')].forEach
((btn) => btn.addEventListener('click', ()=> btn.parentNode.remove()))


const addTask = ()=> {

  // Todo内の要素を配列化して取得する
  const taskList = [...todo.querySelectorAll('.todo-task')].map(
    (task) => task.outerHTML);
    console.log(taskList);

  const makeTask = () => {
    return `<li class="todo-task">
    <span>${inputValue.value}</span>
    <button class="edit">編集</button>
    <button class="to-doing">作業開始</button>
    <button class="delete">削除</button>
    </li>`
  };
  todo.innerHTML = [...taskList,makeTask()].reduce((prev,current)=>
  prev + current);
  deleteTask();
  editTask();
  toDoingTask()
  inputValue.value = ''
}


// 何も入力しなかった場合、アラート起動
const inputForm = ()=> document.getElementById('btn').
addEventListener('click',()=> inputValue.value === '' ? alert('タスクを入力してください')
: addTask());
inputForm();

