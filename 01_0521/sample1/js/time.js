var hour = new Date(); /*何時？かは、常に新しい、現在時刻で設定する*/
var time = hour.getHours();　/*何時？の値を０～２３時までの値で返す*/

var hello = time; //現在時刻に合わせた文章を指定するための変数名

if ( time < 9 ){
    hello = 'おはよう'; 
}else if ( time < 12){
    hello = 'こんにちは';
}else if ( time < 18){
    hello = 'こんばんは';
}else {
    hello = '夜中にどうしたの';
}








var now = document.querySelector('.now');　/*varで変数名[now]を設定、htmlのclass名、nowを呼ぶ*/
now.innerText = hello; /*nowの中にhelloの文言を指定する*/
