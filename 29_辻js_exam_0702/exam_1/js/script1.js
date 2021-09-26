var elm = document.querySelector('#elm');
var obj = document.createElement('h1');

var add_obj = elm.appendChild(obj);
var H1 = document.querySelector('h1');
H1.innerText = 'hello world';
H1.className = "red";


















// // 1. id="elm"の要素を取得する
// ver elm = document.querySelector('.elm');

// // 2. id="elm"の要素内にh1タグを挿入する（要素を作って、入れる）
// var obj = document.createEiement('h1');
// appendChild();

// // 3. 2で作成したh1にclass="red"を付与する(要素を取得して、classを付与する)
// obj.className = 'red';

// // 4. 2で作成したh1内に"hello world"を挿入する
// obj = 'hello world';
