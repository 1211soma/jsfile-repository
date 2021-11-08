'use strict'


    // const btn = () => [ ...document.querySelectorAll('.display')].forEach(
    //     (elm) => elm.addEventListener('click',() =>
    //      document.querySelector('.text').innerText = elm.previousSibling.innerText));
    //      console.log(btn());

// elm 配列の１つ１つの要素


  const func1 = () => 
    console.log(document.querySelector('#inputform').value);
  

  const inputBtn = () => 
      document.querySelector('.input').addEventListener('click',() => 
      document.querySelector('#inputform').value === '' ? alert('文字を入力してください') : func1());
inputBtn();












