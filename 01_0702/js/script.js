// function func1(){
//     var x = document.querySelector('body');
//     var para = document.createElement('p');
//     x.appendChild(para);
//     para.innerText = 'hello world'; 
// }

// 　var btn = document.querySelector('button');
// btn.addEventListener('click',func1)


//func1();

// if(true){
//   var x = 'varだよ';
//   let y = 'letだよ';
//   const z = 'constだよ';
//   console.log(x + 'ブロック内だよ');
//   console.log(y + 'ブロック内だよ');
//   console.log(z + 'ブロック内だよ');
// }
// console.log(x + '←ブロック外')
// console.log(y + '←ブロック外')
// console.log(z + '←ブロック外')


// function func2(){
//     var x = 'varだよ';
//     let y = 'letだよ';
//     const z = 'constだよ';
//     console.log(x + '←ブロック内');
//     console.log(y + '←ブロック内');
//     console.log(z + '←ブロック内');

// }
// func2();

// console.log(x + '←ブロック外');
// console.log(y + '←ブロック外');
// console.log(z + '←ブロック外');



function btnItem(){
    let ulArea = document.querySelector('.ulArea');
    ulArea.classList.toggle('off');
}
const btn = document.querySelector('.btn');
btn.addEventListener('click',btnItem);



// if(true){
//     let x = 'ブロックスコープです';
//     console.log(x);
//   }
//   console.log(x);


// if(true){
//     var xx = 'にんじん';
//     console.log(xx);
// }

// console.log(xx);