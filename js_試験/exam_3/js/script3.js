var kuku = document.querySelector('.kuku');

for ( let i = 1; i < 10; i++){
    var tr = document.createElement('tr');
    kuku.appendChild(tr);
    for ( let j = 1; j < 10; j++){
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerText = (i * j);
    }
}
console.log(kuku);