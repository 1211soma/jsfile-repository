'use strict'


const todo = document.getElementById('todo');
const doing = document.getElementById('doing');
const inputValue = document.querySelector('section > input');


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
    <button class="delete">削除</button>
    </li>`
  };
  todo.innerHTML = [...taskList,makeTask()].reduce((prev,current)=>
  prev + current);
  deleteTask();
  editTask();


}


// 何も入力しなかった場合、アラート起動
const inputForm = ()=> document.getElementById('btn').
addEventListener('click',()=> inputValue.value === '' ? alert('タスクを入力してください')
: addTask());
inputForm();





