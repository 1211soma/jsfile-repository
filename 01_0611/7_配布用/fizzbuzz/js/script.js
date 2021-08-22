var fizzbuzz = [];
fizzbuzz = [];

for ( let i = 1; i < 101; i++){
  if ( i % 15 == 0){
    console.log('fizzbuzz');
  }else if ( i % 5 == 0){
    console.log('buzz');
  }else if ( i % 3 == 0){
    console.log('fizz');
  }else {
    console.log(i);
  }
}



 
//ここまで

// 【触らないで！】fizzbuzzの中身を一つずつliを作り値を渡して表示させる
for(let i = 0; i < fizzbuzz.length; i++){
  let elm = document.querySelector('.elm');
  let elm_li = document.createElement('li');
  elm_li.innerText = fizzbuzz[i];
  elm.appendChild(elm_li);
}
