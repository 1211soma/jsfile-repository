'use strict'

const btn =  document.getElementById('btn');
const inp = document.querySelector('input');
const TodoList = document.getElementById('todo');
let arr = [];




const ArrayBox = ()=>
    arr.forEach((value,index)=>TodoList.innerHTML += `<li>${value}<button onclick=delBtn(${index})>削除</button></li>`);


const edi = (index) =>{
    const submit = prompt('編集内容を入力');
    submit === '' ? alert('文字を入力してください') : arr.splice(index,1,submit)// N番目の1個だけをsbmitに置き換えてください
    TodoList.innerHTML='';
    ArrayBox()
}

const delBtn =(index)=>{ //削除ボタンを
    arr.splice(index,1)// splice = 指定したものを削除
    TodoList.innerHTML='';
    ArrayBox()
}

const TodoBox = () => {
    inp.value === '' ?
    alert('文字を入力してください'):
    (() => {
        arr = [...arr,inp.value];      //即時関数
        TodoList.innerHTML='';
        ArrayBox()
        inp.value = '';
    })()
}
btn.addEventListener('click',() => TodoBox());


// 演習２やってみる　




















