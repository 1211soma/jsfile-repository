




// 現在の日時を取得する
// 取得した日時をメソッドでミリ秒として算出する。
// 目標の日程を設定して、現在の日時と目標の日時の差分を算出する
// ミリ秒を秒に変換して、その全体の秒数を残りの年、日、時、分、秒にそれぞれ変換する
// タイマーで現在の日時を常に1秒ごとに更新させる





const timer = document.getElementById("timer");
const goalTime = new Date("2023/09/08 00:00:00")

function countdown(){
    const nowTime = new Date();

    const Subtraction = Math.floor((goalTime.getTime() - nowTime.getTime())/1000);
    const second = Math.floor(Subtraction % 60);

    const minute = Math.floor(Subtraction / 60 / 60) % 60;
    const hours = Math.floor(Subtraction / 60 / 60 ) % 24;
    const day = Math.floor(Subtraction / 60 / 60 / 24);


    const year = Math.floor(day / 365);
    const lastday = Math.floor(day % 365);

    timer.innerHTML = `残り${year}年 ${lastday}日${hours}時間${minute}分${second}秒`

    Subtraction === 0 ?clearTimeout(countdown) : setTimeout(countdown,1000);
};

countdown();











