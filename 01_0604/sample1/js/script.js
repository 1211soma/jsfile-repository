function bloodcheck(){
  var age = document.kenketsu.age.value;
  var blood = document.kenketsu.bloodType.value;
  var judgeP = document.querySelector('.judge');

  if (age == "" || blood == ""){
    judgeP.innerText = '必要項目を入力してください';
  }else if ( age >= 18 && age <= 65 && blood != 'unknown'){
    judgeP.innerText = 'ご協力ありがとうございました。';
  } else {
    judgeP.innerText = '関心を持っていただきありがとうございました。'
  }
  var ageP = document.querySelector('.age');
  var bloodP = document.querySelector('.blood');
  ageP.innerText = age;
  bloodP.innerText = blood;


}

var btn = document.querySelector('#btn');
btn.addEventListener('click',bloodcheck);




//年齢と血液型が空だったらという条件
//18歳以上65歳以下で、血液型が「不明」になっていない　という条件
//それ以外

//年齢と血液型をHTMLに表示させる処理
// ボタン要素を取得して、クリックしたらbloodCheckという関数が動く





