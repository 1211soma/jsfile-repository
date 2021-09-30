var name = "日本電子";
if (name) {
   var name = "Webデザイン科";
   console.log("このブロック内では", name); //Webデザイン科と表示
}
console.log("グローバルでは", name) //日本電子専門学校と表示




function func() {
    const a = 1;
    console.log(a);
}
func();
// console.log(a);

if (true) {
    var ac = 11;
    console.log(ac);
}
ac = 23;
console.log(ac);

if (true) {
    const ab  = 111;
    console.log(ab);
} 

// console.log(ab);


var abc = 'global';
{
 var abc = 0;
}
abc = 'gooo';
console.log(abc); //0 varはブロックスコープが適用されないので再代入されてしまう

{
    let abc = 1;
}
console.log(abc);




var xx = 100;
 
function a(){
    console.log( xx ); // 100と表示させたい　← undefinedになる
    
    var xx = 200;
    console.log( xx); // 200と表示させたい
}
 
a();

// undefined // 定義されていないよ


const c = 'aiueo';

// c = 'kiki';
// 









// const d = 'no';

// const d = 'yes';

// console.log(d);

// 再定義は　var しか無理






// const xxx = 3;

// xxx = 2;

// console.log(xxx);

// constだけが再代入できない


const array = [];

array.push('新大久保');
array[1] = '新宿';
array.push('渋谷');
array.push('池袋');
// pushは末尾に追加するメソッド


console.log(array); 




// 個人的な練習

const hinata = ['佐々木久美','松田好花','上村ひなの'];

// 二つ　変数を宣言


function mem_btn() {

    // const member = document.getElementById('hinata_member');
    const judge = document.getElementById('judge');
     
    const box1 = String(document.getElementById('hinata_member').value);

    
    
    if ( box1 == `佐々木久美`) {
        judge.textContent = '一期生';
    }else if ( box1 == `松田好花`) {
        judge.textContent = '二期生';
    }else if( box1 == `上村ひなの`){
        judge.textContent = '三期生';
    }else {
        judge.textContent = '不明';
    }


}
const btn = document.getElementById('nameBtn');
btn.addEventListener('click',mem_btn);



// アロー関数　復習
const myobj = 120;


const myFunc = (myobj) => {
    console.log(myobj);
}
myFunc(myobj);


const animals = ['pigs', 'goats', 'sheep'];

const count2 = animals.push('cows');
const count3 = animals.push('theep');
console.log(count2);
console.log(count3);
console.log(animals.length)








