'use strict'
const memberList = [
  { id : 1, name : '里中'},
  { id : 2, name : '山田'},
  { id : 3, name : '上下'},
  { id : 4, name : '殿馬'},
  { id : 5, name : '岩鬼'},
  { id : 6, name : '高代'},
  { id : 7, name : '微笑'},
  { id : 8, name : '渚'},
  { id : 9, name : '蛸田'},
];
const scoreList = [
  { id : 1, score : 80},
  { id : 2, score : 95},
  { id : 3, score : 60},
  { id : 4, score : 100},
  { id : 5, score : 80},
  { id : 6, score : 30},
  { id : 7, score : 70},
  { id : 8, score : 65},
  { id : 9, score : 30},
];

const goukaku = document.getElementById('goukaku');
const fugoukaku = document.getElementById('fugoukaku');

const obj1 = memberList.map(function(num,index){
  return {id: num.id, name: num.name, score: scoreList[index].score} //ここでオブジェクトをつくってしまう
}); //key名: num.key名 で 値が取得できる   //scoreList[index].score で オブジェクト名[値の番号].key名 を取得

//return {id: num.id,name : num.name,score : scoreList[index].score} //ここでオブジェクトをつくってしまう


// memberListを複製して書き換えるため、memberの引数は num を指定するだけでいいが、scoreListに関しては、
// indexを使って、番号を指定、全てを呼び出す必要がある


// numは配列の値　indexは配列の番号　
// num = 配列の値　num.** = オブジェクトなどで使うもの　num.key名　で指定
console.log(obj1);
// return で値を関数元に返すことによって、その値を抱えた関数を他の関数で使う際に引用できる。
// return のメリット


const obj2 = obj1.filter(function(num){
  return num.score >= 70; //num のみではドコのkeyのvalueを呼び出したらいいか、わからない なので、num.scoreである
})
console.log(obj2);  //合格者を表示させる

const obj3 = obj1.filter(function(num){
  return num.score <= 30;
});
console.log(obj3);    // 不合格者を表示させる

const obj4 = obj2.map(function(num){
  const li = document.createElement('li');
  li.innerHTML = `${num.id}番 ${num.name} 合格 ${num.score}点 `;
  goukaku.appendChild(li);
})
// innerHTMLを使ってオブジェクトを文字列にして、テンプレリテラルで文字列にしてブラウザ表示させる。


const obj5 = obj3.map(function(num){
  const li2 = document.createElement('li');
  li2.innerHTML = `${num.id}番 ${num.name} 不合格 ${num.score}点 `;
  fugoukaku.appendChild(li2);
})



















