// func2();
// const func2 = function(){ console.log('hoge')};
// エラー

// 上記はあくまで、変数宣言したfunc2を式として関数を代入している
// 中身のない状態のfunc2を実行しようとしてエラーになっている

'use strict';

func3();
function func3(){ console.log('hogeeee')};
// 動いた



const func_test = function(x,y){
    console.log(x + y)
};
func_test();
//NaN    非数の結果が出力された

function test2(x = 1, y = 2){// 仮引数
    console.log(x + y)
};
test2(100,101); //実引数 ここで引数の値が渡されなかった場合、仮引数が実行される。
//3   実行された


// レストパラメータ
const rest = function (x,...y){
    console.log(x,y)// 2, 3, 4,が配列に代入
};
rest( 1, 2, 3, 4);


function rest2(x,y,...z){
    console.log(x,y) // 1 2
    const array = z.map(function(n){ // zを複製 
        return n * 10;
    });
    console.log(array);
}
rest2(1,2,3,4,5); // [30 40 50]


function kahen(...x){
    const arr1 = x.map(function(n){
        return n * 10;
    });
    console.log(arr1);
}
kahen(1,2,3,4,5)


const triangle = (bottom,height) => {
    return bottom * height / 2 ;
} ;
console.log(triangle(4,6));


const obj = (x,y) => {
    return ({id: x, name: y})
}
console.log(obj(1, '山田太郎'));




// () => {
//     alert('hello world');
// }





// elm.addEventListner('click',function(){ alert('hello world');}) *

const btn = document.getElementById('elm');

 document.querySelector('#elm').addEventListener ('click', () => { alert('hello world'); })
//  func_1();

// add~ スペルミスあり！

// const func8 = function(x, ...y){ const z = y.map(function(n){ return x * n; }) console.log(z)}



