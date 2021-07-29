var math = 70;
var eng = 70;
var pass = 70;

var mathP = document.querySelector('.math');
var engP = document.querySelector('.eng');
var passP = document.querySelector('.pass');

if (pass <= math && pass <= eng){
    passP.innerText = 'どちらも合格！おめでとう！';
}else if (pass > math && pass <= eng){
    passP.innerText = '英語だけ合格！';
}else if (pass <= math && pass > eng){
    passP.innerText = '数学だけ合格！';
}else {
    passP.innerText = 'どちらも不合格！残念！';
}

mathP.innerText = math;
engP.innerText = eng;



