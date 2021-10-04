


let number = 0;
const a = number++; //0 //aの時点では0
const b = ++number; //2 //1足されてから、numberに代入、なので2

console.log(a);
console.log(b);



const test = function (xx) {
    console.log( xx + 10);
}

//後でif文代入してみる

test(100);
// 110　と帰ってくるはず....
// できた！！！

const age = 19;
const judge = (age >= 20) ? 'お酒が買えます': '立派な成人ですね'
console.log(judge);

// inputタグと連携させたいなぁ
// ()なくても動く

'use strict';



// オブジェクトを生成　選択肢を格納
const ques1 = {
    txt1: '大学ノートの「大学」は何大学のこと？',
    answer: {
    A: 'A　東京大学',
    B: 'B　オックスフォード大学',
    C: 'C　ハーバード大学'
    },
}
// A

console.log(ques1.txt1); //大学ノートの～
console.log(ques1.answer.A); //東京大学

//変数名.key名()






const quiz = document.getElementById('quiz');
quiz.textContent = `${ques1.txt1} 
                    ${ques1.answer.A}
                    ${ques1.answer.B}
                    ${ques1.answer.C}`; // 大学ノートの


const submit = document.getElementById('submit');

submit.onclick = function func1() {
//     解答を入力するダイアログを開く
// 解答ボタンを押すと prompt() で解答が入力できるようにする
    　const test = prompt(
    `${ques1.answer.A}　　${ques1.answer.B},　　${ques1.answer.C}`,
    '選択肢から選んでください');
    // function prompt_test() {
    //     str = prompt("文字列を入力してください", "ここに文字列を入力");
    //     alert("入力された文字列は「" + str + "」です。");
    //   }

    const results = document.getElementById('results');

    const ans = test;
    const judge = new String( ans === 'a') ? '正解' : '不正解'
    // ? (trueの場合) : (falseの場合) 
    judge.toUpperCase(); // A　が　効かない
    // 苦戦した理由　new stringは()内の文字列のみを変換することを理解していなかった。
    results.textContent = judge; //judgeの処理の結果を格納する

    
    }

// 結果を表示する
// 入力された解答と問題の解答が一致していればHTMLに「正解！」と表示
// そうでなければ「不正解と表示」
// 条件分岐では三項演算子を使うこと

// 演習1を改造してみよう。
// 小文字で入力しても正解になるようにする
// 解答の選択肢以外が入力されたら、「A、B、Cで解答してください」と表示する

// var str = new String("Hallo Japan！");
// var UPstr = str.toUpperCase();
// console.log(UPstr);