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










function itemPrice(){ 

    var item = document.fruits.fruit;　
    var num = item.selectedIndex;
    var optionValue = item.options[num].value;
    var elm = document.querySelector('.cart');

    //ここからswitchを記述
    //検証するときは、２０行目のoptionvalueにcaseを入力する

    var optionValue = "";
    switch(optionValue) {
        case "":
            elm.innerText = "商品を選択してください";
        break;
        case "バナナ":
            elm.innerText = "バナナは198円です";
        break;
        case "リンゴ","みかん":
            elm.innerText = "リンゴとミカンは２９８円です";
        break;
        case "ぶどう":
            elm.innerText = "ぶどうは600円です";
        break;

        default:
            elm.innerText = "現在、品切れです。";
    }


    //ここまでswitch
}

var btn = document.querySelector('#btn');
btn.addEventListener('click',itemPrice)

