'use strict'


const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,10];



console.log([...array1,...array2]);
// 配列を連結してくれる


// []を取っ払ってくれる

// ...array1 * 10 //エラー


const text = 'あいうえ';

console.log([...text]);

// 文字を配列にしてくれる

// あいうえ が配列として　それぞれ格納された

const obj1 = {a:1 , b:1};
const obj2 = {c: 3, d:4};

console.log({...obj1});
// console.log(...obj1);   エラー
console.log({...obj1,...{c:30 , d:4}}); //keyを上書き出来る　３　から　３０へ


console.log({...obj1,...obj2});


const obj3 = {a:11, b:22, c:33};
const {b,c,d} = obj3;
console.log(b);
console.log(obj3);
console.log(d); //undef
// console.log(a); //なぜかエラー　//デストラクチャリングの時に、aは呼ばれていなかったから

// でストラクチャリング　は　オブジェクトを個別の変数に代入できる


const member = ['中井','稲垣','木村','草薙'];

const [nakai,inagaki] = member;
console.log(nakai);
console.log(inagaki);
// 中井　稲垣　と出力
// 配列の場合、左から順番に指定される

const [one,two,three] = '大野智';
console.log(one,two,three);

const num = ['10','20','30','40','50'];
const [ten,twenty,,fifty] = num;
console.log(fifty);
// 30を飛ばして40が表記された



const num2 = ['10','20','30','40','50'];
const [ten2,...twenty2] = num2;
console.log(ten2,twenty2);
// 30を飛ばして40が表記された

const namae = () => ['佐藤','鈴木','斎藤','橋本'];
const [top1] = namae();
console.log(namae);


const player = {
    id: 1,
    name: '田中',
    posion: 'センターバック'
}
const {id:numbers} = player;
console.log(numbers);
// const umbers = 1222;
console.log(player);

const player0 = {
    id: 1,
    name: '田中',
    posion: 'センターバック'
}

const {id,...withoutId} = player;
console.log(withoutId);
console.log(withoutId.name);



const sample = {
    bangou: {number: 303 , number2: 777},
    age: {hatachi: '２３歳', misoji: '３０歳'},
    text1: '大きくなれ！'
}

// const { id: {number,number2}, number2} = member;
// console.log(bangou,text1);






