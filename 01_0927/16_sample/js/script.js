// // 'use strict';
// x = 0
// console.log(x);
// // 0

// function func1() {
//     'use strict';
//     y = 1;
//     console.log(y);
// }//変数宣言していないからエラーになった。ストリクトモード下にあるため。
// func1();

x = 1;
{
const x = 'hello world';
console.log(x);
}//ブロック内のxを参照
console.log(x);
//グローバル変数のxを参照

//グローバルとローカルで同じ変数を作らない！







var xx = 'var';
let yy = 'let';
console.log(xx,yy);

window.xx = '0';
window.yy = '1';
console.log(xx);
console.log(yy);// 1ではなく'let'と出力される
console.log(window.yy);//windowオブジェクトのyyとして存在
//1がwindowオブジェクトの値として格納されている

//varだと入らない






//ブロックスコープのテスト

var a = 'hello';
function func2() {
    var a = 0;
    console.log(a);
}
func2 ();
console.log(a);// グローバス 'hello' を出力

function func3() {
    const a = 1;
    console.log(a);
}
func3(); //1
console.log(a);// グローバル変数の36行目のaを出力

//ブロックテスト let.constでもやってみる







// var name = '日本電子';

// if (name) {
//     var name = 'webデザイン';
//     console.log('このブロック内では' , name);
// }

// console.log('グローバルでは',name)
// // 値が上書きされた証拠
// //varは関数スコープなので、if文では効かない



var name = '日本電子';

if (name) {
    const name = 'webデザイン';
    console.log('このブロック内では' , name);
}

console.log('グローバルでは',name)//let,constの場合は、日本電子








//巻き上げ

var aa = 'tes';

function makiage(){
    console.log(aa);//直下にaaが再代入されており、左辺の[var aa]とmakiage()が出力されているため
    //[undefind]と出力される
    var aa = 'local';
    console.log(aa);
}
makiage();

//varだと処理は実行される
// constにするとエラーになる。

//宣言だけを巻き上げる

const obj = {namae: '山田太郎'};
obj.namae = '田中洋一';
obj.age = '19';

console.log(obj);


const array = [1];
array[0] = 2;//値を変更できる
array.push('hi');//追加できる

console.log(array);



let sum = 1 + '1';
//文字列としての'11'が出てくる
let sum2 = 1 - '1';
// 0 数字としての０が出力









const txt = '\'hello\'\n\'world\'';
console.log(txt);

// \nで改行できる


String (true);
console.log(String);



    const px = '39px';
    const pi = '8.76';

    console.log(parseInt(px));//pxがはぶかれる
    console.log(Number.parseInt(pi));//小数点以下は切り捨て　四捨五入はされない




//演習問題１
'use strict';
    function plus()  {
        const num1 = Number(document.getElementById('num1').value);
        const num2 = Number(document.getElementById('num2').value);
        // const box1 = num1.value;
        // const box2 = num2.value;
        // const box3 =  parseInt(box1);
        // console.log(typeof box3);
        // parseInt(box2);
        const test = num1 + num2;
        const outPut = document.getElementById('output');
        // outPut = test;//outPutに計算結果が格納される
        outPut.innerHTML = `答えは` + test  + `です`;
    }
    const btn = document.getElementById('btn');
    btn.addEventListener('click',plus);



// 演習問題２



//演習問題３









