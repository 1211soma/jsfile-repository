function test (){
    var ulbox = document.querySelector('.ulArea');
    var top = document.querySelector('.top');
    var mid = document.querySelector('.mid');
    var btm = document.querySelector('.btm');

    ulbox.classList.toggle('off');
    btn.classList.toggle('active');
    // 三本線がクリックすると動く
    top.classList.toggle('top_close');
    mid.classList.toggle('mid_close');
    btm.classList.toggle('btm_close');

}

var btn = document.querySelector('.btn');
btn.addEventListener('click',test);
