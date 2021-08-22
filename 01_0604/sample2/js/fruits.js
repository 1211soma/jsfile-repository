function itemPrice(){
    var item = document.fruits.fruit;
    var num = item.selectedIndex;
    var optionvalue = item.options[num].value;
    var cart = document.querySelector('.cart');

    switch (optionvalue) {
        case "":
            cart.innerText = '新宿';
        break;
        case "バナナ":
            cart.innerText = '新大久保';
        break;
        case "リンゴ":
            cart.innerText = '品川';
        break;
        case "みかん":
            cart.innerText = '心斎橋';
        break;
        case "ぶどう":
            cart.innerText = '九段下';
        break;
        default:
            cart.innerText = '品切れです';
        break;
    }
}

var btn = document.getElementById('btn');
btn.addEventListener('click',itemPrice);