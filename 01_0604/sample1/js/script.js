function bloodTest (){
  let age = document.kenketsu.age.value;
  let blood = document.kenketsu.bloodType.value;
  let judgeP = document.querySelector('.judge');
  let ageP = document.querySelector('.age');
  let bloodP = document.querySelector('.blood');

  if (age == "" || blood == ""){
    judgeP.innerText = '必要項目を入力してください';
    ageP.innerText = age;
    bloodP.innerText = blood;
  }else if( 18 <= age && 65 >= age && blood != 'unknown'){
    judgeP.innerText = '献血対象者に適合します';
    ageP.innerText = age;
    bloodP.innerText = blood;
  }else {
    judgeP.innerText = '献血対象者に適合しません';
    ageP.innerText = age;
    bloodP.innerText = blood;
  }
}

let btn = document.getElementById('btn');
btn.addEventListener('click',bloodTest);



