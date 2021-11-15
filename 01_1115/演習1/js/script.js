

// const DoubleNumber = (num1) => (num2) => console.log('大きい数字');


// const func1 = (x)=> (y)=> x + y;
// func1(1)(2);

// x と y ふたつの引数を設定 そして足す
// それぞれ、別に実行


    function func1(x){
        return function(y){
        return x + y
        };
    };
    const func = func1(1)(2); // x に (1)を渡す y に (2) を渡す
    console.log(func) //3

// カリー化　引数を一つずつ受け取ること

    {
        const currie = (n) => {
        return (m) => n * m;
        }
        console.log(currie(4)(3)); 　//12
    }
    
    // 変数currie で引数n を設定 
    // return で　引数(m)を設定　nとmを掛け算してね
    // console.logで実引数に 4と3を渡してくれよ

    {
        const number = (n) => {
        return(m) => n > m ? `${n} Nのほうが大きいです ` : `${m} Mのほうが大きいです`
        }
        console.log(number(0)(23)); 
    }





    