
var num = 5

for( let i = 0; i < 5; i++){
    console.log(i * num);
} 
let x = 1;
let y; 

y = x++;
console.log(x);
console.log(y); 

var array = [];

array = [2,4,6,8,10];

for ( let i = 0; i < 5; i++){
    console.log(array[i]); /**iの2,4,6,8,10をコンソールに表示させる */
}
var array = [];

array = [1,2,3,4,5,6,7,8,9,10];

for ( let i = 0; i < 10; i++){
    array.push(i+1)
    console.log(array[i])
}



