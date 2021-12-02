fetch('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json')
    .then((response) => response.json())
    .then((data) => func1(data))
    .catch((err)=> console.log(err));  // ここまでで一文
// コンソールログで　エラーだった場合、err と表示


// 要素を取得する

    // JSONの値の詳細
    // 発表者：publishingOffice
    // 報告日時：reportDatetime
    // 対象地域：targetArea
    // ヘッドライン：headlineText
    // 詳細：text
const func1 = (data) => {

    // 発表者
    const puresenter = data.publishingOffice;
    const Poffice = document.querySelector("#publishingOffice > td");
    Poffice.innerText = puresenter;

    // 報告日時
    const report = data.reportDatetime;
    const Datatime = document.querySelector("#reportDatetime > td");
    Datatime.innerText = report;

    // 対象地域
    const targetArea = data.targetArea;
    const Area = document.querySelector("#targetArea > td");
    Area.innerText = targetArea;

    // ヘッドライン
    const headlineText = data.headlineText;
    const headline = document.querySelector("#headlineText > td");
    headline.innerText = headlineText;

    // 詳細
    const text = data.text;
    const dataText = document.querySelector("#text > td");
    dataText.innerText = text; 


    console.log(data);
};

// 要素を取得　





// fetch　外部サービスの情報を取り込んでくるメソッド

// then promiseメソッドの一つ　正常な時に有効なメソッド
// 非同期処理が成功した時に thenが作動する
// 







    // bjectheadlineText: "小笠原諸島では、高波に注意してください。"
    // publishingOffice: "気象庁"
    // reportDatetime: "2021-12-02T16:41:00+09:00"
    // targetArea: "東京都"




















