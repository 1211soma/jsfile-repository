var hour = new Date();
var time = hour.getHours();

var hello = time;

if (time < 12){
    hello = 'おはよう';
}else if (time < 17){
    hello = 'こんにちは';
}else if (time < 21){
    hello = 'こんばんは';
}else {
    hello = '夜中にどうしたの';
}

var now = document.querySelector('.now');
now.innerText = hello;


