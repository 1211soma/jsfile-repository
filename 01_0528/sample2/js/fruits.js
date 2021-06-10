// ボタンを押したら動くプログラムの塊（関数といいます）
// 関数はいつでも呼び出せるものなので、順序は関係ありません。47行目に呼応して動作します。
function itemPrice(){ 

    // 変数itemにHTMLのselect要素を取得
    const item = document.fruits.fruit;　

    // 変数itemに入っているoptionの中で選択した番号を変数numに取得
    // 0からカウントするのでリンゴなら2がnumに入る、ももなら5。
    let num = item.selectedIndex;

    // select要素内のoptionの中でnumに指定された番号を持つoptionのvalueを取得。
    let optionValue = item.options[num].value;

    // 文字を表示するためにp.cartを取得してelmとする。
    // 後ほどテキストを表示する時にelm.innerTextなどをつかう。
    let elm = document.querySelector('.cart');


    //ここからswitchを記述

















    //ここまでswitch

//関数ブロックを閉じる括弧
}

// ボタン要素を取得して変数btnに代入
var btn;

// btnに格納された要素をクリックしたら関数itemPriceを動かす
btn.addEventListener('click',itemPrice)