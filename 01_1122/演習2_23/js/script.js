'use strict'



const now = new Date();

const goal = new Date(2022,10,15);


// setTimeout(関数function, 一定時間の指定)　//一定時間後に一度だけ指定の処理を行う
// setInterval(関数function, 一定時間の指定) //一定時間ごとに指定の処理を繰り返す

// const timer = ()=> console.log('1秒経過');

// setTimeout(timer,1000); //ファイルが読み込まれたら1秒後にtimerを動かす
// ファイルが読み込まれたら、timer作動 1秒後に作動する



const timer2 = ()=> {
    console.log('1秒経過しました');//処理
    const test = document.getElementById('test');
    test.textContent = 10;


    setTimeout(timer2,1000);
   }
   timer2();
   // ファイルが読み込まれたら、タイマーがずっとカウントする
   // 再起関数 自分自身を呼び出す関数を使っている


//    const startTime = new Date(); //基準となる時間の取得
//    const timer = ()=>{
//     const now = new Date(); //比較する現在時間の取得
//     const diff = now.getTime() - startTime.getTime(); //差分の算出 
//     console.log('1秒経過'); //処理
//     diff < 10000 ? setTimeout(timer,1000): clearTimeout(timer);//タイマーの停止判定
//    }
//    timer();






