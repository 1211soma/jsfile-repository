function bloodCheck(){　// ←関数は呼び出されると処理が始まるプログラムの塊
  var age = document.kenketsu.age.value;
  var blood = document.kenketsu.bloodType.value;
  var judgeP = document.querySelector('.judge'); 

  //年齢と血液型が空だったらという条件
  if( age == "" || blood == ""){
    judgeP.innerText = '必要項目を入力してください。';

  //18歳以上65歳以下で、血液型が不明以外という条件
  } else if( age >= 18 && 65 >= age && blood != 'unknown') {
    judgeP.innerText = '非常に困っています！ご協力お願いします。';

  //それ以外
  } else {
    judgeP.innerText = '関心を持っていただいてありがとうございます。';
  }
  
  //年齢と血液型をHTMLに表示させる処理
  var ageP = document.querySelector('.age');
  var bloodP = document.querySelector('.blood');
  ageP.innerText = age;
  bloodP.innerText = blood;
}

// ボタン要素を取得して、クリックしたらbloodCheckという関数が動く
var btn = document.querySelector('#btn');
btn.addEventListener('click',bloodCheck)