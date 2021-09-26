var kuku = document.querySelector('.kuku');

for (let i = 1; i < 10; i++){
  var tr = document.createElement('tr');
  kuku.appendChild(tr);
  for (let j = 1; j < 10; j++){
    var td = document.createElement('td');
    tr.appendChild(td);
    td.innerText = (i * j);
  }
}
console.log (kuku);













// for(let i = 1; i <= 9; i++){
//     //1. class="kuku"の要素を取得する
//     var kuku
    
//     //2. trタグを作る
//     var tr = document.createElement('tr');
    
//     //3. trタグをkukuに挿入する
//     kuku.appendChild(tr);

//     //4. for文を使ってtdタグをtrに挿入し、tdに九九の計算結果を挿入する

//   }