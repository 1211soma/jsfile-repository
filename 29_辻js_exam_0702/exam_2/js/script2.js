//prompt()はファイルを開いたときに表示される入力用ダイアログ
var Eng = parseInt(prompt('英語の得点を入力してください'));
var Math = parseInt(prompt('数学の得点を入力してください'));
var para = document.querySelector('p');
var jdg; //判定結果用の変数

//数学、英語ともに70点以上で合格とする。
//どちらも合格の場合は「どちらも合格！おめでとう！」と表示
//片方の教科だけが合格の場合は「'教科名'が不合格頑張れ！」と表示
//どちらも不合格の場合は「どちらも不合格！努力しよう！」と表示

//プログラムを記述
if ( 70 <= Eng && 70 <= Math){
    jdg = 'どちらも合格！おめでとう！';
 }else if ( 70 <= Eng && 70 > Math){
    jdg = '数学が不合格頑張れ！';
 }else if ( 70 > Eng && 70 <= Math){
    jdg = '英語が不合格頑張れ！';
 }else {
     jdg = 'どちらも不合格！努力しよう！';
 }

//プログラム終了

para.innerText = jdg;