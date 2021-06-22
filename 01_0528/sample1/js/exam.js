var math = 90;
var eng = 40;
var pass = 70;

// 両方とも合格
//　数学　合格
// どちらも　不合格

var mathP = document.querySelector('.math');
var engP = document.querySelector('.eng');
var passP = document.querySelector('.pass');

if (math > pass && eng > pass){
    console.log ('合格');
    passP.innerText =  '合格';
}else if ( math > pass && eng < pass){
    console.log ('数学だけ合格');
    passP.innerText = '数学だけ合格';
}else {
    console.log('不合格');
    passP.innerText = '不合格';
}








