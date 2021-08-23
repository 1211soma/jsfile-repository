const btnList = Array.from(document.querySelectorAll('button'));
const txtList = Array.from(document.querySelectorAll('.txt'));

for ( let i = 0; i < btnList.length; i++){
    function func1() {
        txtList[i].classList.toggle('off');
    }


btnList[i].addEventListener('click',func1);

}






