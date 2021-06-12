var fizzbuzz = [];


//ここにfor文を使って配列fizzbuzzを作る処理を記述する
for ( let i = 0; i < 100; i++){
  //fizzbuzz.push(i+1);
  //console.log(fizzbuzz[i]);
  if ( i % 5 == 0){
    console.log("fizz");
  }
  else if ( i % 3 == 0){
    console.log("buzz");
  }
  else{
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
