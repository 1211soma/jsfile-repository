var math = 90;
var eng = 90;
var pass = 70; /**合格点 */

var mathP = document.querySelector('.math');
var engP = document.querySelector('.eng');
var passP = document.querySelector('.pass');

if(math > pass && eng > pass){ /**数学　70より高い　かつ　英語　70より高い */
    console.log('合格');
    passP.innerText = '合格';

}else if(math < pass && eng > pass) {    /**数学　70より低い　または　英語　70より高い */
    console.log('数学が不合格');
    passP.innerText = '数学が不合格';

}else {
    console.log('不合格');
    passP.innerText = '不合格';
}




