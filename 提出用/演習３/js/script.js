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

const ques2 = {
    txt1: '【二問目】 マスクメロンのマスクはどんな意味？',
    answer: {
    A: `A:偽物`,
    B: `B:香り`,
    C: `C:仮面`
    },
}

const ques3 = {
    txt1: '【三問目】 イタリアで借金の担保に使えるのは？',
    answer: {
    A: 'A:ワイン',
    B: 'B:パスタ',
    C: 'C:チーズ'
    },
}

// const array = [ques1,ques2,ques3];

// const quiz = document.getElementById('quiz');

// quiz.innerText =
//     array[0];





//2 問題を表示させる

quiz.innerText = 
    `${ques1.txt1}\n${ques1.answer.A}\n${ques1.answer.B}\n${ques1.answer.C}
    
    ${ques2.txt1}\n${ques2.answer.A}\n${ques2.answer.B}\n${ques2.answer.C}

    ${ques3.txt1}\n${ques3.answer.A}\n${ques3.answer.B}\n${ques3.answer.C}`;



// これで問題文を表示させる



//3 解答を入力するダイアログを作る
const submit = document.getElementById('submit');
//解答ボタンを呼び出す
submit.onclick = function func1() {

    const test = prompt(`${ques1.answer.A}　　${ques1.answer.B},　　${ques1.answer.C}`,'');

    const test2 = prompt(`${ques2.answer.A}　　${ques2.answer.B},　　${ques2.answer.C}`,'');

    const test3 = prompt(`${ques3.answer.A}　　${ques3.answer.B},　　${ques3.answer.C}`,'');



//4 結果を表示する
    const results = document.getElementById('results');
    const judge = [];

    const ans = test;//promptが格納した変数に答えを入れる
    const change1 = new String('a'); //小文字のaを A　に変換
    const judge_a = ans === 'A' ? '1' 
    : ans === 'a' ? '1' 
    : ans === 'B' ? '0'
    : ans === 'b' ? '0'
    : ans === 'C' ? '0'
    : ans === 'c' ? '0' 
    : ans !== 'A' ? '0' :
    change1.toUpperCase(); // 小文字に変換するメソッド
    results.textContent = judge_a;

    judge_a === '1' ? console.log('正解！！！')  
    : judge_a === '0' ? console.log('不正解！！！') 
    : judge_a === '1','0' ? console.log('１問目終了') 
    : judge[0];
    judge[0] = judge_a;
    // 配列の0番目に一問目の答えを格納



    const ans2 = test2;//promptが格納した変数に答えを入れる
    const change2 = new String('a'); //小文字のaを A　に変換
    const judge_b = ans2 === 'A' ? '0' 
    : ans2 === 'a' ? '0' 
    : ans2 === 'B' ? '1'
    : ans2 === 'b' ? '1'
    : ans2 === 'C' ? '0'
    : ans2 === 'c' ? '0' 
    : ans2 !== 'A' ? '0' :
    change2.toUpperCase(); // 小文字に変換するメソッド
    results.textContent = judge_b;

    judge_b === '1' ? console.log('正解！！！')  
    : judge_b === '0' ? console.log('不正解！！！') 
    : judge_b === '1','0' ? console.log('二問目終了')
    : judge[1];
    judge[1] = judge_b;


    const ans3 = test3;//promptが格納した変数に答えを入れる
    const change3 = new String('a'); //小文字のaを A　に変換
    const judge_c = ans3 === 'A' ? '0' 
    : ans3 === 'a' ? '0' 
    : ans3 === 'B' ? '0'
    : ans3 === 'b' ? '0'
    : ans3 === 'C' ? '1'
    : ans3 === 'c' ? '1' 
    : ans3 !== 'A' ? '0' :
    change3.toUpperCase(); // 小文字に変換するメソッド
    results.textContent = judge_c;

    judge_c === '1' ? console.log('正解！！！')  
    : judge_c === '0' ? console.log('不正解！！！') 
    : judge_c === '1','0' ? console.log('三問目終了') 
    : judge[2];
    judge[2] = judge_c;

    
    quiz.innerText = '';//問題文が消える
    const right = Number(parseInt(judge[0])) + Number(parseInt(judge[1])) + Number(parseInt(judge[2]));




    results.innerText = `三問中、${right}問正解！`;
    submit.remove();

    const clearBtn = document.getElementById('clear');
    clearBtn.onclick = function clearBtn() {
        results.textContent = '';
        window.location.reload();// このメソッドでページ再読み込み

    }
}

//funcreload




    // textcontentだと　\n 効かない
