// 下記の6つの処理を各1回ずつとfor文を使って九九の表を作成しよう
var kuku = document.querySelector('.kuku'); //table要素を取得

for ( let i = 1; i < 10; i++){
    var tr = document.createElement('tr'); //trタグを生成
    kuku.appendChild(tr); //tableタグ内にtrを挿入
    for ( let j = 1; j < 10; j++){
    var td = document.createElement('td'); //tdタグを生成  
    tr.appendChild(td); //trタグ内にtdを挿入
    td.innerText = (i * j); //td内に計算結果を挿入

    console.log ( i * j );   
 }
}




//console.log(i+'*'+j+'='+i*j)



