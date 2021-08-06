var hour = new Date();
var time = hour.getHours();

var hello = time;

if ( time < 12){
    hello = 'おはよう諸君！';
}else if ( time < 15){
    hello = 'もう、お昼を過ぎたね！';
}else if ( time < 21){
    hello = 'さて、そろそろ夜中の時間帯だ！';
}else {
    hello = '夜中にどうしたんだね？君？';
}

var now = document.querySelector('.now');
now.innerText = hello;












