

// const obj1 = new Object();
// const obj2 = {};



// console.log(obj1,obj2);
// console.log(obj1 === obj2);
// // 新しいオブジェクトが生成される

// const now = new Date();
// console.log(now);
// console.log(now);

// console.dir(now);

// const year = now.getFullYear();
// const month = now.getMonth();

// console.log(year,month + 1);

// console.log(typeof(year)); //number

// 一問目


const now = new Date();
// const month = now.getMonth();


// const array1 = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
// console.log(array1[month]);


// 二問目


const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const week = ['月','火','水','木','金','土','日'];
const dayOfWeek = now.getDay();
console.log(dayOfWeek);


console.log(year);
console.log(month +1);
console.log(day);

console.log(`${year}年 ${month + 1}月 ${day}日 ${week [dayOfWeek -1]}`);

const hour = now.getHours();

const kekka = hour < 12 ? '午前' : '午後';
console.log(kekka);


const haretsu = new Array();
console.log(haretsu);




console.log(Math.PI);

const numPI = Math.PI;
console.log(numPI);
console.log(Math.floor(numPI)); //端数切り捨て


console.log(Math.floor(1,4));
console.log(Math.ceil(1,4));
console.log(Math.round(1,4));

const array3 = ['k','f','e','i'];

// console.log(array3[Math.floor()];




// const timer = () => console.log('一秒経過');
// setTimeout(timer,1000);


// const timer2 = () => {
//     console.log('一秒経過');
//     setTimeout(timer1,1000);
// }
// timer2();




const startTime = new Date();
const timer = () => {
    const now = new Date();
    const diff = now.getTime() - startTime.getTime(); //現在時刻からの経過時間を取得する
    console.log('一秒経過');
    diff < 3000 ? setTimeout(timer,1000): clearTimeout(timer);
}
timer();



