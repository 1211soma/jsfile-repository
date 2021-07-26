



function itemPrice(){ 

    var item = document.fruits.fruit;　
    var num = item.selectedIndex;
    var optionValue = item.options[num].value;
    var elm = document.querySelector('.cart');

switch (optionValue){
    case "":
        elm.innerText = '商品を選択してください';
        break;
    case "バナナ":
        elm.innerText = 'バナナ';
        break;
    case "リンゴ":
        elm.innerText = 'リンゴ';
        break;
    case "みかん":
        elm.innerText = 'みかん';
        break;
    case "ぶどう":
        elm.innerText = 'ぶどう';
        break;
    case "もも":
        elm.innerText = '現在品切れ';
        break;
    case "パイナップル":
        elm.innerText = '現在品切れ';
        break;
}
}


var btn = document.querySelector('#btn');
btn.addEventListener('click',itemPrice);








