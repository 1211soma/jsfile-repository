// 下記の6つの処理を各1回ずつとfor文を使って九九の表を作成しよう


var kuku = document.querySelector('.kuku');

for ( let i = 1; i < 10; i++){
    var tr = document.createElement('tr');
    kuku.appendChild(tr);
    for ( let j = 1; j < 10; j++){
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerText = ( i * j );
        console.log ( i * j)
    }
}






// 表の列とマスを生成する
//　入れ子構造で入れていく　appendchild
// 最後はマスの中で掛け算させる





