var hour = new Date();
var time = hour.getHours();

var hello = time;

if ( time <= 9){
    hello = 'おはよう';
}else if ( time <= 12){
    hello = 'こんにちは';
}else if ( time <= 18){
    hello = 'こんばんは';
}else{
    hello = 'おやすみ'
}

var now = document.querySelector('.now');
now.innerText = hello;








