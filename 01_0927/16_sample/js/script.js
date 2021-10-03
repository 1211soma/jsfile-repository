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

xy = 1;
{
const x = 'hello world';
console.log(x);
console.log(xy);
}//ブロック内のxを参照

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

var a = 'グローバル変数のaです！'; //グローバルスコープの変数a
function func1() {
    var a = 'ローカル変数だよ';
    console.log(a);//ブロックスコープの変数a
}
func1 ();//関数の処理を実行
console.log(a);// グローバル変数 を出力 //関数内の{}の変数aは出力しない

if ( true ) {
    console.log(a); // グローバル変数;
}
console.log(a);

//  ブロック　とは　{}　で囲われたもの  


// let const でやった場合
function func2() {
    let a = 111;
    console.log(a);//ブロックスコープのlet もしくは const a を出力 //111
}
func2(); 
console.log(a);// グローバル変数のaを出力　//関数内の{}の変数aは出力しない

if ( true ) {
    console.log(a); //グローバル変数
} 




const abc = 'グローバル変数２';
if (true) {
    const abc = 1000;
    console.log(abc);//1000
}
console.log(abc);//varの場合、1000 //*let,constの場合、グローバル変数２を出力




















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

var aa = 'aa1';

function makiage(){
    console.log(aa);//直下にaaが再代入されており、左辺の[var aa]とmakiage()が出力されているため
    //[undefind]と出力される
    var aa = 'aa2';
    console.log(aa);
}
makiage();

//varだと処理は実行される
// constにするとエラーになる。

//宣言だけを巻き上げる






const obj = {namae: '山田太郎'};
obj.namae = '田中洋一'; // 配列の中身、書き換え
obj.age = 19 + '歳';

console.log(obj);


const array = [];
array[0] = 2;//値を変更できる //0番目に2を追加
array.push('hi');//追加できる　//新たにhiが追加

console.log(array + '  配列のたまり場');

const addTxt = 'beautiful'
const txt2 = `hello ${ addTxt } world!!!!!!!!!!!!!!!!`;

const txt3 = `生き て るだけで、
愛`;

console.log(txt3);

console.log(txt2);


let sum = 1 + '1';
//文字列としての'11'が出てくる
let sum2 = 1 - '1';
// 0 数字としての０が出力









const txt = '\'hello\'\n\'world\'';
console.log(txt);

// \nで改行できる
// hello world 改行されたテキスト


String (true);
console.log(String);



    const px = '39px';
    const pi = '8.76';

    console.log(parseInt(px));//pxがはぶかれる
    console.log(Number.parseInt(pi));//小数点以下は切り捨て　四捨五入はされない




    

//演習問題１
'use strict';
    const sample = btn.addEventListener('click',function plus() {
        const num1 = Number(document.getElementById('num1').value);
        const num2 = Number(document.getElementById('num2').value);
        const test = num1 + num2;
        const outPut = document.getElementById('output');
        // outPut = test;//outPutに計算結果が格納される
        outPut.innerHTML = `答えは ${test} です`;

        /////////演習問題２
        if ( Number(parseInt(test))) {
            outPut.innerHTML = `答えは` + test  + `です`;
        }else if ( test !== Number) {
            outPut.innerHTML = `数値を入力してください`;
        }

        //////////演習問題３
        function multiply() {
            const array = [1];

            if (Number(parseInt(test))) {
                array[0] = test;
                console.log(array);
            }
            return num1 + num2;
        }
        console.log( multiply(num1, num2 ) + 'ですよ' );
        //ボタンを押すと計算結果が出てくる

    });




