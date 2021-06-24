//演習問題１はalertを十回押して、１から１０までカウントできる仕様にしてください

//演習問題２はalertを10から１へと一つずつ減るようにカウントしなさい

//演習１から３までの画像のようにブラウザに表示させなさい

var array = [];
array = ['伊藤','遠藤','佐藤','鈴木','松尾'];
var ulList = document.querySelector('ul');

for (let i = 0; i < array.length; i++){
    var list = document.createElement('li');
    var addList = ulList.appendChild(list);
    addList.innerText = array[i];
if ( i % 2 == 0){
    addList.style = "color: red";
} else {
    addList.style = "color: blue";
}
}





/*for文は繰り返すもの */

//配列を作る []
//li要素を作る createElement
//要素をul内に入れる appendchild
//liに配列の文字列を入れる innerText

//等号、不等号