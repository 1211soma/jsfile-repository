'use strict'

const btn =  document.getElementById('btn');
const input = document.querySelector('input');
const TodoList = document.getElementById('todo');
let arr = [];

const inArr = ()=>
    arr.forEach((value,index)=>TodoList.innerHTML += `<li>${value}<button onclick=dele(${index})>削除</button></li>`);



const edi = (index) =>{
    const sbmit = prompt('編集内容を入力');
    sbmit === '' ? // ''がtrueだったら
    alert('文字を入力してください') :
    arr.splice(index,1,sbmit)// N番目の1個だけをsbmitに置き換えてください
    TodoList.innerHTML='';
    inArr()
}

const dele =(index)=>{ //削除ボタンを
    arr.splice(index,1)// splice = 指定したものを削除
    TodoList.innerHTML='';
    inArr()
}

const todoPush = () => {
    input.value ==='' ?
    alert('文字を入力してください'):
    (()=>{
        arr = [...arr,input.value];      //即時関数
        TodoList.innerHTML='';
        inArr()
        input.value = '';
    })()
}
btn.addEventListener('click',() => todoPush());


// 演習２やってみる　変数名変更する




















// 'use strict'

// const inputText = document.querySelector('input');
// const btn = document.getElementById('btn');
// const ul = document.getElementById('todo');



// btn.addEventListener('click',() => {

//   const addTask = (index) => {
//     return `<li class='task'>${inputText.value}<button onclick = 'deletes(${index})'>削除</button></li>`
//   };

   

//   const taskList = Array.from(document.querySelectorAll('.task'));
//   console.log(taskList);

//   const taskList2 = taskList.map((task)=>task.outerHTML);//親要素のHTMLを取得
//   console.log(taskList2);

//   const taskList3 = [...taskList2,addTask()];
//   console.log(taskList3);

//   ul.innerHTML = taskList3;

    
//   // const deleteTask = () => {
   
//   // }
//   // const deletBtn = Array.from(document.querySelectorAll('.delete'));

//   // deleteBtn.forEach((task) =>{
//   //   taskList.remove();
//   // })
  
//   // console.log(deleteBtn);

//   const deletes = (index) => {
//     taskList3.splice(index,1)
//     ul.innerHTML = taskList3
//   }


// });










