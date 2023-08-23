const Koa = require('koa')
const app = new Koa()
const KoaRouter = require('koa-router')
const router = new KoaRouter()
const BodyParser = require('koa-bodyparser')
const bodyparser = new BodyParser()
const cors = require('koa2-cors')
const db = require('./sql')

// allowedMethods()方法允许post、get等请求，没有用这个方法页面会出现not found；koa-bodyparser必须在router之前被注册
app.use(bodyparser)
    .use(router.routes())
    .use(router.allowedMethods())
    .use(cors())

// 注册插入数据库路由接口
// router.post('/register', async (ctx, next) => {
//     ctx.set('Access-Control-Allow-Origin', '*')
//     let sbody = ctx.request.body //接收页面传过来的值
//     let temp = await sql
//         .query('insert into login(usename,password) values(?,?)', [
//             sbody.usename,
//             sbody.password
//         ])
//         .then(
//             function (result) {
//                 console.log(result)
//                 return result
//             },
//             function (error) {
//                 return -1
//             }
//         )
//     ctx.body = sbody //传回去页面的值，会在页面中显示。
// })

// POST登录接口
router.post('/login', async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*') // 解决前端跨域问题
    const query = ctx.request.body
    const sql = `select * from stu where phone = '${query.phone}' and password = '${query.pass}'`
    await db(sql).then(
        function (result) {
            ctx.status = result.code
            ctx.body = result // 返回数据
        },
        function (error) {
            console.error(error)
        }
    )
})

// GET登录接口
router.get('/login', async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    const query = ctx.query
    const sql = `select * from stu where phone = '${query.phone}' and password = '${query.pass}'`
    await db(sql).then(
        function (result) {
            ctx.status = result.code
            ctx.body = result
        },
        function (error) {
            console.error(error)
        }
    )
})

app.listen(3000, () =>
    console.log('Server is running at http://localhost:3000')
)
