alert ( null || 0);

//AND && は　偽物を真っ先に捕まえる 
//1 && 2 の場合、　どちらも真なので　「２」が帰ってくる

//OR　|| は 真実を真っ先に捕まえる
//　null || 0 の場合、　どちらも偽なので、　「0」が帰ってくる

/**インクリメント　検証 */
let x = 1;
let y;

y = ++x;
console.log(x);
console.log(y);

/*var array = [];
array = [2,4,6,8,10];
array.length

for ( let i = 0; i < 5 ; i++){
    console.log(array[i]); 
 }
  /**[i]という指定はinedexのすべてを表示させてください */ 

    /**pushで最後尾に値を追加するときは、i < n を1増やす*/   
 



//alert( null || 2 ); // 2 (2 は最初のtruthy) //２が最初に帰ってくる
//alert( null || 0 || 6 ); // 2 (最初のtruthy)
//alert( undefined || null || 0 ); // 0 (すべて偽、なので最後の値が返却される)

//----var x = 3;
//var y = 4;
//var ans = x + y;


//var x = 14;
//var ans2= x + y; // 18 と返される


//var h2box = document.querySelector('h2');
//h2box.innerText = ans2;


//var h3box = document.createElement('h3');
//var after_h2 = h2box.appendChild(h3box);
//after_h2.innerText = 'イングランド'; 





//var は　後から数値を変更できる　変数　であることが　証明　された。
