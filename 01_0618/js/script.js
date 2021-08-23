//演習問題１はalertを十回押して、１から１０までカウントできる仕様にしてください

// for ( let a = 1; a < 11; a++){
//     alert(a);
// }


//演習問題２はalertを10から１へと一つずつ減るようにカウントしなさい

// for ( let b = 10; b > 0; b--){
//     alert(b);
// }


//演習１から３までの画像のようにブラウザに表示させなさい

var array = [];
array = ['佐藤','鈴木','豊田','新庄','矢崎'];

var ulList = document.querySelector('ul');

for ( let i = 0; i < array.length; i++){
    var list = document.createElement('li');
    ulList.appendChild(list);
    list.innerText = array[i];
    if ( i % 2 == 0){
        list.className = 'red';
    }else {
        list.className = 'blue';
    }
}





/*for文は繰り返すもの */

//配列を作る []
//li要素を作る createElement
//要素をul内に入れる appendchild
//liに配列の文字列を入れる innerText

//等号、不等号