function itemPrice(){
    var box = document.fruits.fruit;
    var num = box.selectedIndex;
    var optionvalue = box.options[num].value;
    var cart = document.querySelector('.cart');

    switch (optionvalue){
        case "":
            cart.innerText = '商品を選択してください';
        break;
        case "バナナ":
            cart.innerText = 'バナナのたたき売り';
        break;
        case "リンゴ":
            cart.innerText = 'リンゴ飴';
        break;
        case "みかん":
            cart.innerText = 'ミカンジュース';
        break;
        case "ぶどう":
            cart.innerText = 'ぶどうワイン';
        break;
        default:
            cart.innerText = '現在。品切れです';
        break;
    }
}

var btn = document.getElementById('btn');
btn.addEventListener('click',itemPrice);