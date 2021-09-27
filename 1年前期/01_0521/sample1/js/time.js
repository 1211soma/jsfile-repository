var hour = new Date();

var time = hour.getHours();

var now = document.querySelector('.now');


if( time < 9){
    now.innerText = 'おはよう';
}else if ( time < 12){
    now.innerText = '昼';
}else if ( time < 18){
    now.innerText = '夕方';
}else {
    now.innerText = 'ナイト';
}








