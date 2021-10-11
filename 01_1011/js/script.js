'use strict';


    let n = 0;
    let y = 0;
    while ( n < 3){
        n += 1;
        y += n;
        console.log(n);
        console.log(y);
    }

    const member = [1,2,3,4,5];

    for ( const i of member) {
        console.log(`${i}`);
    }// 文字列として　1,2,3,4,5 と表示された！
// 変数iの中に、配列を代入できる。中身を一つずつ、処理していく
// １個ずつ呼び出してくれる

const namae = [{name: '田中'},{name: '斎藤'},{name: '岸田'},{name: '河野'}]
for ( const ii of namae){
    console.log(`${ii.name}`);
}
// オブジェクトでも、for of文でいじることが可能　

// 










