fetch('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json')
    .then((response) => response.json())
    .then((data) => func1(data))
    .catch((err)=> console.log(err));





    // JSONの値の詳細
    // 発表者：publishingOffice
    // 報告日時：reportDatetime
    // 対象地域：targetArea
    // ヘッドライン：headlineText
    // 詳細：text



const func1 = (data) => {















};





















