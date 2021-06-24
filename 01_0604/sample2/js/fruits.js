var val = 1;
switch(val) {
    case 1:
        console.log('1です');

    case 2:
        console.log('2です');
    break;

    default:
        console.log('それ以外です');
}


/*「果物を選択」を選んだ場合は「商品を選択してください」と返す
バナナの場合は「バナナは198円です」と返す
リンゴとみかんの場合はどちらを選んでも「リンゴとみかんは298円です」と返す
ぶどうの場合は「ぶどうは600円です」と返す
その他の場合は「現在品切れです」と返す。*/


function itemPrice(){ 

    var item = document.fruits.fruit;　
    var num = item.selectedIndex;
    var optionValue = item.options[num].value;
    var elm = document.querySelector('.cart');

    //ここからswitchを記述
    //検証するときは、２０行目のoptionvalueにcaseを入力する

  var optionValue = "みかん";
  switch (optionValue) {
        case "":
          elm.innerText = '商品を選択してください';
          break;
        case "バナナ":
            elm.innerText = 'バナナは１９８円です';
            break;
        case "リンゴ":
            elm.innerText = 'リンゴとミカンは２９８円です';
            break;
        case "みかん":
            elm.innerText = 'リンゴとミカンは２９８円です';
            break;
        case "ぶどう":
            elm.innerText = 'ブドウは６００円です';
            break;
        default:
          elm.innerText = '現在、品切れです';
  }
}
var btn = document.querySelector('#btn');
btn.addEventListener('click',itemPrice)

