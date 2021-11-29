'use strict'

// {
// "datatype"; {
//     "string" ; "hello world",
//     "number" ; 1,
//     "booleran" ; true,
//     "object" ; { id; 1}
// }
// }


// const json = `{"name" : "山田太郎" ,"age" : 19}`;
// const obj = JSON.parse(json);
// console.log(obj);


// const json = ` {
//                 "profile" :{ 
//                 "name" : "辻宗馬", 
//                 "age" : 19 , 
//                 "prefecture" : "東京都" ,
//                 "city" : "東村山市",
//                 "hobby" : ["movie","walk","sleep"] 
//                 } 
//             }`
//             ;
// const obj = JSON.parse(json);
// console.log(obj);
// console.log(obj.profile.city);
// console.log(obj.profile.hobby[1]);



// const json2 = `{
//                 "college" :{ 
//                 "name" : "日本電子専門学校",
//                 "course" : "Web・モバイル分野",
//                 "depariment" : "Webデザイン科",
//                 "id" : "aw"
//                     }
//                 }`
//                 ;
// const obj2 = JSON.parse(json2);
// console.log(obj2);


// fetch('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json')
// .then((response) => response.json())
// .then((data) => func1(data))
// .catch((err)=> console.log(err));

// const func1 = (data) => console.log(data);
// // オブジェクトの中身がそのまま返ってくる




// fetch('URLを入力') 
//  .then((response)=> response.json())
//  .then((data)=> func1(data))
//  .catch((err)=> console.log(err));




const json = `{
    "name" : "辻宗馬",
    "age" : 19
}`;

const obj = JSON.parse(json);
// .parseメソッド オブジェクトをparseに変換してくれるメソッド
console.log(obj);
// これで変換されて表示される



// この状態では、JSONのままではjsファイルに変換されない
// なので、オブジェクト型に変換する必要がある。


const json2 = `{
    "profile" : {
    "name" : "辻宗馬",
    "age" : 19,
    "address" : {"profecture" : "東京都",
                "city" : "東村山市"},
    "hobby" : ["映画鑑賞","散歩","睡眠"]  
    }
    },
        {
    "college" : {
        "name" : "日本電子専門学校",
        "course" : "Web・モバイル分野",
        "department" : "Webデザイン科",
        "id" : "aw"
                }
        }`;

        // 別々の変数に分けてやる

const obj2 = JSON.parse(json2);
console.log(obj2);





