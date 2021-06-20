
var array = [];
array = ['伊藤','遠藤','佐藤','鈴木','松尾'];
var ulList = document.querySelector('ul');

for ( let i = 0; i < array.length; i++){ //最後以外に成立する等号にする
  var list = document.createElement('li'); //js内にhtml上で使うliを定義
  var addlist = ulList.appendChild(list);
  addlist.innerText = array[i];
  if (i % 2 == 0){
    addlist.style = "color: red"; 
  }else {
    addlist.style = "color: blue";
  }
}

/*for文は繰り返すもの */

//配列を作る []
//li要素を作る createElement
//要素をul内に入れる appendchild
//liに配列の文字列を入れる innerText

//等号、不等号　気を付ける