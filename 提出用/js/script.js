'use strict';


//1 クイズの問題、選択肢、正解を格納したデータを作る
const ques1 = {
    txt1: `【一問目】 大学ノートの「大学」は何大学のこと？`,
    answer: {
    A: `A:東京大学`,
    B: `B:オックスフォード大学`,
    C: `C:ハーバード大学`
    },
}




//2 問題を表示させる
const quiz = document.getElementById('quiz');

quiz.innerText = 
    `${ques1.txt1}\n${ques1.answer.A}\n${ques1.answer.B}\n${ques1.answer.C}`

// これで問題文を表示させる



//3 解答を入力するダイアログを作る
const submit = document.getElementById('submit');
//解答ボタンを呼び出す
submit.onclick = function func1() {
    const test = prompt(
    `${ques1.answer.A}　　${ques1.answer.B},　　${ques1.answer.C}`,'');

//4 結果を表示する
    const results = document.getElementById('results');

    const ans = test;//promptが格納した変数に答えを入れる
    const change1 = new String('a'); //小文字のaを A　に変換
    const judge_a = ans === 'A' ? '正解！' 
    : ans === 'a' ? '正解！' 
    : ans === 'B' ? '不正解'
    : ans === 'b' ? '不正解'
    : ans === 'C' ? '不正解'
    : ans === 'c' ? '不正解' 
    : ans !== 'A' ? 'A.B.Cで選んでください' :
    change1.toUpperCase(); // 小文字に変換するメソッド
    results.textContent = judge_a;
    //judgeの処理の結果を格納する
    // results.textContent = console.log(judge_a);



    }
 
    // テンプレート文字列で囲ったなかを　\n で改行できる
    // textcontentだと　\n 効かない
