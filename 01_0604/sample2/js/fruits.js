function itemPrice(){ 

    var item = document.fruits.fruit;　
    var num = item.selectedIndex;
    var optionValue = item.options[num].value;
    var elm = document.querySelector('.cart');

    //ここからswitchを記述

    var optionValue = "ぶどう";
    switch(optionValue) {
        case "":
            elm.innertext = "商品を選択してください";
        break;
        case "バナナ":
            elm.innertext = "バナナは198円です";
        break;
        case "リンゴ","みかん":
            elm.innertext = "リンゴとミカンは２９８円です";
        break;
        case "ぶどう":
            elm.innertext = "ぶどうは600円です";
        break;

        default:
            elm.innertext = "現在、品切れです。";
    }


    //ここまでswitch
}

var btn = document.querySelector('#btn');
btn.addEventListener('click',itemPrice)

