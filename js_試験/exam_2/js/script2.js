var eng = parseInt (prompt ('英語の点数を入力してください ※半角数字で'));
var math = parseInt(prompt ('数学の点数を入力してください　※半角数字で'));
var para = document.getElementById('para');
var jdg;


if ( 70 <= eng && 70 <= math){
    jdg = 'おめでとう';
}else if ( 70 >= eng && 70 <= math){
    jdg = '英語が不合格 残念';
}else if ( 70 <= eng && 70 >= math){
    jdg = '数学が不合格 残念';
}else {
    jdg = '残念';
}


para.innerText = jdg;



