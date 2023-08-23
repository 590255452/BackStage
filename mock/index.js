const Mock = require("mockjs")

const Random = Mock.Random;

let id = Mock.mock('@id')               //字符串方式
let name = Mock.mock({                  //对象方式
    name: '@name'
})


// Mock.mock("/api/logins",
//     //返回10条随机数据 
//     Mock.mock({
//         "data|10": [
//             {
//                 name: "@cname",//随即中文名
//             }
//         ]
//     })
// )


Mock.mock('/test', {
    "res": 0,
    "data":
    {

        "name": "@cname",//随机生成中文名字
    }
});