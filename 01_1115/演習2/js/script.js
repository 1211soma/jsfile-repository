'use strict'



    const price = document.getElementById('price');
    const tax = document.getElementById('tax');
    const btn = document.getElementById('btn');
    const taxValue = document.querySelector('p > span');


    // taxValue.textContent = '聞こえるか'

    // function keisan() {
        
    // }






    ////////////////////////// カリー化 練習　ここから


    const x = 10; // xに10を代入
    const func1 = ()=> console.log(x); //func1に10を代入
    const func2 = ()=> { 
     const x = 20; // func2内の x は 20にする
     func1(); // func1 呼び出し
    };
    func2(); // func2　呼び出し
    // 10 
    // func2で呼び出されているのは、const x



    ////////////////////////// カリー化 練習　ここまで
