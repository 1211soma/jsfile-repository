'use strict'


const todo = document.getElementById('todo');
const doing = document.getElementById('doing');
const inputValue = document.querySelector('section > input');


// 編集
const editTask = () => [...document.querySelectorAll('.edit')].forEach
((btn) => btn.addEventListener('click', ()=> btn.parentNode.
querySelector('span').innerText = prompt('タスク名を修正できます')))

// btn.parentNode.qs('span')   ボタンの親要素であるspanを修正できる
// [...docment.querySelectorAll('.edit')]で、項目ごとに編集ボタンを付与できる

// 登録ボタンがクリックされた場合、登録ボタンの親要素であるspanの中身の文字列をproptで編集できるようにする


// 削除
const deleteTask = () => [...document.querySelectorAll('.delete')].forEach
((btn) => btn.addEventListener('click', ()=> btn.parentNode.remove()))

// Nodeが持つプロパティです。 指定したノードのDOMツリー内にある親ノードを取得することができます。 
// forEachは最終手段として使う


const addTask = ()=> {

  // Todo内の要素を配列化して取得する
  const taskList = [...todo.querySelectorAll('.todo-task')].map( //li要素を配列化している
    (task) => task.outerHTML);
    console.log(taskList);

    // innerHTML  と outerHTML は対になっている

  const makeTask = () => {
    return `<li class="todo-task">
    <span>${inputValue.value}</span>
    <button class="edit">編集</button>
    <button class="delete">削除</button>
    </li>`
  };
  todo.innerHTML = [...taskList,makeTask()].reduce((prev,current)=>
  prev + current);// []には　配列化したli要素と、その中身を詳細に指定したmakeTaskを格納する
  deleteTask();// reduceメソッドとは、隣り合う二つの関数を、単一の値にすること  //すなわち、配列化した値と、makeTaskを一つにして描画できる　この場合
  editTask();


}


// 何も入力しなかった場合、アラート起動
const inputForm = ()=> document.getElementById('btn').
addEventListener('click',()=> inputValue.value === '' ? alert('タスクを入力してください')
: addTask());

inputForm(); // この記述でinputForm()が実行できるようにする

// 登録ボタンをクリックしたときに、中身のinputが空の要素だったら、alertが作動
// ※空じゃなかった場合、addTask()を実行 


const member = ['里中','山田','殿馬','岩鬼'];
member.forEach(function(name){
 console.log(name);
})
 // 引数nameに配列がひとつひとつ、consoleに分けられる
