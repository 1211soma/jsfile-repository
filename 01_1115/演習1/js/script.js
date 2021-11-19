

    {
        const number = (n) => {
        return(m) => n > m ? `${n} Nのほうが大きいです ` : `${m} Mのほうが大きいです`
        }
        console.log(number(0)(23)); 
    }


    // １　{}を設定　numberで引数nを設定　
    // 


// 変数numberを定義　アロー関数で引数nを設定

// returnで 引数 m を設定
// 三項演算子を記述　単純にn と m　を比較させる

// console.log で実引数を設定



    const Number2 = (xx) => (yy) => xx < yy ? `${yy}のほうが大きいよね` : `${xx}のほうが大きいよね`
    
    console.log(Number2(10)(100));
    // カリー化と三項演算子によって、二つの引数の数字の比較ができる。


// アロー関数って何ができる？


// カリー化のメリットって何？
// A. コードの記述する量が減る




//////////////// 部分適用

    const func1 = (x)=> (y)=> x + y;
    const func2 = func1(1);//比較条件となる値を引数として1を仮引数のxに渡している
    console.log(func2(2)); //戻り値の無名関数の引数として2を仮引数のyに渡している

// func2を実行するときは,func1の引数は「１」にしておく
// consoleに記述する際は,func2の引数は「２」に設定しておく
// 3


// この記述によってfunc2は毎回呼び出されると、func1の引数が[1]の状態で実行される



const curriedMultiple = (a) => (b) => a - b;
console.log(curriedMultiple(10)(3));  //30

// 変数currieMultipie は 引数a,bを掛け算させる変数

const tenfold = curriedMultiple(10); //部分適用で引数で渡した値を10倍する関数を作る
// 変数tenfoldを呼び出した場合、currie~ 第一引数は 10 とする


console.log(tenfold(9));  //7 // 10-3 = 7 // 30 === -20
// tenfold呼び出し時に、3を掛ける。

// currie = 10 が固定化されている
// 引数は a なのか それとも、b なのか


// const hello = function(greeting,name) {
//     console.log(`${greeting}、${name}さん`);
//    }
//    hello('こんにちは','山田');
//    hello('こんにちは','里中');


// const hello = (greeting)=> (name)=> console.log(`${greeting}、${name}さん`);
// const hello2 = hello('こんにちは');
// hello2('山田');
// hello2('里中');

// ダブルアロー関数 を作り、consoleで文字列を設定
// 別の変数を作り、呼び出し時、helloの引数は こんにちは　に固定










