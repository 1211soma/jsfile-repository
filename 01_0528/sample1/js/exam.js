
var math = 80;
var eng = 90;
var pass = 70;

var mathP = document.querySelector('.math');
var engP = document.querySelector('.eng');
var passP = document.querySelector('.pass');


if (pass < math && pass < eng){
    passP.innerText = '合格';
}else if (pass > math && pass < eng){
    passP.innerText = '数学だけ不合格';
}else if (pass < math && pass > eng){
    passP.innerText = '英語だけ不合格';
}else {
    passP.innerText = 'どちらも不合格';
}








