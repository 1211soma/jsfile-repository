function itemPrice(){
    var item = document.fruits.fruit;
    var num = item.selectedIndex;
    var box = item.options[num].value;
    var cart = document.querySelector('.cart');
    
    switch (box){
        case "":
            cart.innerText = '商品を選択してください';
            break;
        case "バナナ":
            cart.innerText = 'バナナフィッシュ';
            break;
        case "リンゴ":
            cart.innerText = 'リンゴスター';
            break;
        case "みかん":
            cart.innerText = 'ミカンジュース';
            break;
        case "ぶどう":
            cart.innerText = '武道館';
            break;
        case "もも":
            cart.innerText = '桃井かおり';
            break;
        default:
            cart.innerText = 'パインアメ';
            break;
    }
    
    
    
}



var btn = document.getElementById('btn');
btn.addEventListener('click',itemPrice);



