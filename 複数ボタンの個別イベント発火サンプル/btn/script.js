//btnListにHTMLに存在するbutton要素を配列として代入
const btnList = Array.from(document.querySelectorAll('button'));
//txtListにHTMLに存在する.txtを持つ要素を配列として代入
const txtList = Array.from(document.querySelectorAll('.txt'));

for(let i = 0; i< btnList.length; i++){ //btnListの数だけfor文を回す
    //関数func1を作り、発火したら、押したボタンのindexと連動するtxtListの要素の.offが切り替わる
    function func1(){
        txtList[i].classList.toggle('off');
    }
    //ボタンを押したらfunc1が発火する
    btnList[i].addEventListener('click',func1);        
}
