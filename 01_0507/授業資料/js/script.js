



//1.取得したい要素の分だけ変数を作り、要素を取得して代入する
var getH1 = document.querySelector('h1');
var txt = document.querySelector('.chg_txt');
//pの一部を細かく指定するために、class名を指定した。class名は.(ドット)で開始する。id名は＃(シャープ)を使う。
console.log (getH1);
console.log (txt);



//2.取得した要素がそれぞれ内包している文章を上書きする
getH1.innerText = ('辻　宗馬の自己紹介サイト');
txt.innerText = ('いらっしゃい');


//3.sectionタグとh2タグを作成する（JavaScript側で作成したものを変数に代入するだけでHTMLには反映されない）
var newSection = document.createElement('section');
var newH2 = document.createElement('h2');
var newP = document.createElement('p');

console.log (newSection);
console.log (newH2);
console.log (newP);



//4.作ったsectionタグをHTML12行目のpタグの次に挿入する
txt.after (newSection); 
//命令内容：　12行目pタグの後に、sectionタグを入れなさい。
//(txt)=html12行目の、pタグの変数名　



//5.sectionタグにh2タグ、pタグ、さらにそれぞれ文章を挿入したものを子要素をして挿入する（文章の挿入は2の方法と同じ）
newSection.appendChild (newH2).innerText = '私の趣味';
newSection.appendChild (newP).innerText = '映画鑑賞です';