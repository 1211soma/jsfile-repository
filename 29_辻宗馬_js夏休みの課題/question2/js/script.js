// var year = ['1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年',
// '2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年','2020年','2021年'];
// var month = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']; 
// var day = ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日',
// '18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日','31日'];



// var result = year.indexOf('1990年');
// console.log(result);

// var result2 = month.indexOf('3月');
// console.log(result2);

// var result3 = day.indexOf('2日');
// console.log(result3);

// var resultBox = result + result2 + result3 ;
// console.log(resultBox);


// var test = elm; 
// var elm = document.querySelector('.elm');


// for ( let i = 1; i < 366; i++){
//     if ( resultBox == 0) {
//         elm.innerText ='月曜日'; 
//     }else if ( resultBox == 1) {
//         elm.innerText ='火曜日'; 
//     }else if ( resultBox == 2){
//         elm.innerText ='水曜日'; 
//     }else if ( resultBox == 3){
//         elm.innerText ='木曜日'; 
//     }else if ( resultBox == 4){
//         elm.innerText ='金曜日'; 
//     }else if ( resultBox == 5){
//         elm.innerText ='土曜日'; 
//     }else if ( resultBox == 6){
//         elm.innerText ='日曜日';
//     }else {
//         elm.innerText = '不明';
//     } 
// }








// for ( let i = 1; i < 366; i++){

//     if ( day % 7 == 0) {
//         elm.innerText = '月曜日';
//     }else if ( day % 7 == 1){
//         elm.innerText = '火曜日';
//     }else if ( day % 7 == 2){
//         elm.innerText = '水曜日';
//     }else if ( day % 7 == 3) {
//         elm.innerText = '木曜日';
//     }else if ( day % 7 == 4){
//         elm.innerText = '金曜日';
//     }else if ( day % 7 == 5){
//         elm.innerText = '土曜日';
//     }else if ( day % 7 == 6){
//         elm.innerText = '日曜日';
//     }else {
//         elm.innerText = '不明';
//     }

// }


let total = 0;
let y = parseInt(prompt('年を入力してください'));
let m = parseInt(prompt('月を入力してください'));
let d = parseInt(prompt('今日は何日か入力してください'));

for ( let i = 1990; i < y; i++){
    if ( y % 4 == 0 && y % 100 != 0 || y % 400 == 0) {
        total = 366;
    }else {
        total = 365;
    }
}


Array = [];
let array = [111,31,28,31,30,31,31,30,31];
// 0,1,2,3,4,5,6,7,8,

for ( let i = 0; i < m; i++){
    if ( array[i] % 31 == 0){
        var ans = total += array[i];
    }else if ( array[i] % 30 == 0){
        total += array[i];
    }else if( array[i] % 28 == 0){
        total += array[i];
    }else {
        month4 = 0;
    }
}

    console.log( ans += d);




var elm = document.querySelector('.elm');

for ( let i = 1; i < 366; i++){

    if ( ans += d % 7 == 0) {
        elm.innerText = '月曜日';
    }else if ( ans += d % 7 == 1){
        elm.innerText = '火曜日';
    }else if ( ans += d % 7 == 2){
        elm.innerText = '水曜日';
    }else if ( ans += d % 7 == 3) {
        elm.innerText = '木曜日';
    }else if ( ans += d % 7 == 4){
        elm.innerText = '金曜日';
    }else if ( ans += d % 7 == 5){
        elm.innerText = '土曜日';
    }else if ( ans += d % 7 == 6){
        elm.innerText = '日曜日';
    }else {
        elm.innerText = '不明';
    }

}












// var new_array = ["a", "b", "c","s", "t", "u", "v", "w", "x", "y", "z"];

// console.log(new_array);
// new_array = [];

// console.log(new_array);













