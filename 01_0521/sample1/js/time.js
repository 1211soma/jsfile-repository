var hour = new Date();
var time = hour.getHours();
var now = document.querySelector('.now');


if ( time < 12){
    now.innerText = 'おはよう';
}else if ( time < 17){
    now.innerText = 'こんにちは';
}else if ( time < 21){
    now.innerText = 'こんばんは';
}else {
    now.innerText = '夜中にどうしたの';
}


