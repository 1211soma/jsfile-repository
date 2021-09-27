// 'use strict';
x = 0
console.log(x);
// 0

function func1() {
    'use strict';
    y = 1;
    console.log(y);
}//変数宣言していないからエラーになった。ストリクトモード下にあるため。
func1();

