'use strict';


//     let n = 0;
//     let y = 0;
//     while ( n < 3){
//         n += 1;
//         y += n;
//         console.log(n);
//         console.log(y);
//     }

//     const member = [1,2,3,4,5];

//     for ( const i of member) {
//         console.log(`${i}`);
//     }// 文字列として　1,2,3,4,5 と表示された！
// // 変数iの中に、配列を代入できる。中身を一つずつ、処理していく
// // １個ずつ呼び出してくれる

// const namae = [{name: '田中'},{name: '斎藤'},{name: '岸田'},{name: '河野'}]
// for ( const ii of namae){
//     console.log(`${ii.name}`);
// }
// // オブジェクトでも、for of文でいじることが可能　

// // 

// const numbers = [1,2,3,4,5]
// const num = numbers.map(function(number){
//     console.log( number * 10);
// });

// // この記述でコンソールに出力できる
// //map関数は配列をコピーしてくれるもの
// // 配列の値を number と名づける



// const func1 = function(callback){
//  const num = 1000;
//  callback(num);

// }


// const func2 = function(sum){ //sumの時点で1000が格納されている
//     console.log(sum + 1); //1001
// }
// func1(func2);

// ///// この関数よーく理解する

// const funcA = function(callback){
//     const num = 1000;
//     callback(num);
   
//    }

//    // callbackの機能によって、numの1000がsum2へと渡される
// funcA(function(sum2){
//     console.log(sum2 + 1)
// });
// // 関数を引数として渡すことができるもの

// // {} ← オブジェクト


// const array2 = [1,2,3];

// const NewArray = array2.map(function(num,index){
//     console.log(num.index);
//     return num * 2;
// })
// console.log(array2);
// console.log(NewArray);

// // mapメソッドを使った時点で配列がコピーされている


// const player = ['大谷','ゴメス','栗山','緒方','ラミレス'];
// const sebangou = ['1','2','4','5','7'];
// const newArray = player.map(function (key,index){
//     return {name: player[index], number: sebangou[index]}
// }) 


// console.log(player);
// console.log(sebangou);


// /////// filterメソッド

// const box = [1,20,30];
// const NewBox = box.filter(function (num){
//     return num > 2;　// この条件に当てはまるものだけ新配列に代入される
// });
// console.log(box); // 1,20,30
// console.log(NewBox); // 20,30
// // {}内で *2 など計算はできない



// /////// findメソッド

// const box2 = [1,20,30];
// const NewBox2 = box2.find(function (num){
//     return num > 20;　// この条件に当てはまるものだけ新配列に代入される
// });
// console.log(box2); // 1,20,30
// console.log(NewBox2); // 30

// // 配列内の特定の要素を一つだけ返してくれる関数メソッド
// // 条件に当てはまるものだけを一つだけ返してくれる
// // ※trueが２つ以上あっても一番最初にtrueの値だけ返す


// const plusS = ['あ','い','う','え','お']
// const Newplus = plusS.reduce(function (num1,num2){
//     return num1 + num2;
// })
// console.log(plusS);
// console.log(Newplus);
// // 数字だったらまとめて足される
// // 文字列だったらすべてつながる

// // 俳句がつくれそう　


// // forEachはバグを起こしやすいので、極力使わないことが望ましい
// // 配列を直接書き換えてしまうため



/////////////////////////////////////////////////////////////////////////




const member = [1,2,3,4,5];
for(const i of member){
 console.log(`${i * 2}`)
}

// 配列の値を左から順に取得してくれる
// const i で変数に再代入している　※配列はconstでも再代入可能
// 1 2 3 4 5 
// これによってテンプレート文字列によって取得された数値がコンソールに出力される

// 仮説１　これにより、うまいこと配列の中身をいじれるのではないか？ // 結果:いじれた

const memberObj = [{name: '里中'},{name: '山田'}, {name: '殿馬'}, {name: '岩鬼'}]
for(const i of memberObj){
        console.log(`${i.name + 'さん'}`)
    
}
// 文字列の中身を少しいじるぐらいのことはできる

// 配列内のオブジェクトをいじることも可能
// if文で指定することにより、特定の要素のみ引き出すことにも成功する。




const func1 = function(callback){
    const num = 1000;
    callback(num); //func2(1000)として動く
   }
   const func2 = function(sum){
    console.log(sum); //最終的にこの評価が結果として返る。
   }
   func1(func2);



   

