


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






/////////////////// 17 演習問題　ここから
'use strict';



// オブジェクトを生成　問題と選択肢を格納
const ques1 = {
    txt1: `【一問目】 大学ノートの「大学」は何大学のこと？`,
    answer: {
    A: `A:東京大学`,
    B: `B:オックスフォード大学`,
    C: `C:ハーバード大学`
    },
}
// A

const ques2 = {
    txt1: '【二問目】 マスクメロンのマスクはどんな意味？',
    answer: {
    A: `A:偽物`,
    B: `B:香り`,
    C: `C:仮面`
    },
}
// B

const ques3 = {
    txt1: '【三問目】 イタリアで借金の担保に使えるのは？',
    answer: {
    A: 'A:ワイン',
    B: 'B:パスタ',
    C: 'C:チーズ'
    },
}
// c

console.log(ques1.txt1); //大学ノートの～
console.log(ques1.answer.A); //東京大学

//変数名.key名()






const quiz = document.getElementById('quiz');
quiz.innerText = 
`${ques1.txt1}\n${ques1.answer.A}\n${ques1.answer.B}\n${ques1.answer.C}

${ques2.txt1}\n${ques2.answer.A}\n${ques2.answer.B}\n${ques2.answer.C}

${ques3.txt1}\n${ques3.answer.A}\n${ques3.answer.B}\n${ques3.answer.C}`


; // 大学ノートの


// const txt = `hello
//  world`;
const submit = document.getElementById('submit');

submit.onclick = function func1( start ) {

//     解答を入力するダイアログを開く
//     解答ボタンを押すと prompt() で解答が入力できるようにする
    　const test = prompt(
    `${ques1.answer.A}　　${ques1.answer.B},　　${ques1.answer.C}`,'');

    　const test2 = prompt(
    `${ques2.answer.A}　　${ques2.answer.B},　　${ques2.answer.C}`,'');

    　const test3 = prompt(
    `${ques3.answer.A}　　${ques3.answer.B},　　${ques3.answer.C}`,'');

    // function prompt_test() {
    //     str = prompt("文字列を入力してください", "ここに文字列を入力");
    //     alert("入力された文字列は「" + str + "」です。");
    //   }

    const results = document.getElementById('results');
    const judge = [];

    const ans = test;
    const change1 = new String('a'); //小文字のaを A　に変換
    const judge_a =  ans === 'A' ? '1' 
    : ans === 'a' ? '1' 
    : ans === 'B' ? '0'
    : ans === 'b' ? '0'
    : ans === 'C' ? '0'
    : ans === 'c' ? '0' 
    : ans !== 'A' ? '0' :
    change1.toUpperCase(); // 小文字に変換するメソッド
    results.textContent = judge_a; //judgeの処理の結果を格納する

    judge_a === '1' ? console.log('正解！！！')  
    : judge_a === '0' ? console.log('不正解！！！') 
    : judge_a === '1','0' ? console.log('１問目終了') 
    : judge[0];
    judge[0] = judge_a;

    // last1で正解なら1を格納 不正解なら0を格納

    


    // if (judge_a === '正解') {
    //     console.log('突破');
    //     let array = [];
    //     array[0] = 1;
    // }else if(judge_a === '不正解' || 'A,B,Cから選択してください'){
    //     console.log('突破ならず');
    // }




    const ans2 = test2;
    const change2 = new String('b'); //小文字のaを A　に変換
    const judge_b =  ans2 === 'A' ? '1' 
    : ans2 === 'a' ? '0' 
    : ans2 === 'B' ? '1'
    : ans2 === 'b' ? '1'
    : ans2 === 'C' ? '0'
    : ans2 === 'c' ? '0' 
    : ans2 !== 'A' ? '0' :
    change2.toUpperCase(); // 小文字に変換するメソッド
    results.textContent = judge_b; //judgeの処理の結果を格納する
    judge_b === '1' ? console.log('正解！！！')  
    : judge_b === '0' ? console.log('不正解！！！') 
    : judge_b === '1','0' ? console.log('２問目終了') 
    : judge[1];
    judge[1] = judge_b;

    // last1で正解なら1を格納 不正解なら0を格納



    const ans3 = test3;
    const change3 = new String('b'); //小文字のaを A　に変換
    const judge_c =  ans3 === 'A' ? '1' 
    : ans3 === 'a' ? '0' 
    : ans3 === 'B' ? '0'
    : ans3 === 'b' ? '0'
    : ans3 === 'C' ? '1'
    : ans3 === 'c' ? '1' 
    : ans3 !== 'A' ? '0' :
    change3.toUpperCase(); // 小文字に変換するメソッド
    results.textContent = judge_c; //judgeの処理の結果を格納する
    judge_c === '1'  ? console.log('正解！！！')  
    : judge_c === '0' ? console.log('不正解！！！')
    : judge_c === '1','0' ? console.log('３問目終了')  
    : judge[2];
    judge[2] = judge_c;


    console.log(judge);
    // last1で正解なら1を格納 不正解なら0を格納

    quiz.innerText = '';
    const right = Number(judge_a) + Number(judge_b) + Number(judge_c);
    results.innerText = `三問中、${right}問正解！`;
    submit.remove();


   
    const clearBtn = document.getElementById('clear');
    clearBtn.onclick = function clearBtn() {
    results.textContent = '';
    window.location.reload();// このメソッドでページ再読み込み

    }
    // if (judge_c === '正解') {
    //     console.log('突破３');
    //     const res3 = 1; 
    //     quiz.innerText = '';
    //     const right = res3;
    //     results.innerText = `三問中、${right}問正解！`;
    // }else if (judge_b === '不正解' || 'A,B,Cから選択してください') {
    //     console.log('突破ならず');
    //     quiz.innerText = '';
    // }

    }







    // function リセットする関数の名前 {
    //     document.フォームの名前.reset();
    //   }




 
    // テンプレート文字列で囲ったなかを　\n で改行できる
    // textcontentだと　\n 効かない

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