const mysql = require('mysql2') // mysql版本8.0前使用mysql插件

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'soft',
    database: 'one',
    port: '3306',
    connectionLimit: 10
})

const sql = function (sql, values) {
    return new Promise((resolve, reject) => {
        connection.getConnection(function (err, connection) {
            if (err) {
                resolve({
                    code: 500,
                    msg: `数据库连接失败:${err}`
                })
            } else {
                connection.query(sql, values, (err, results) => {
                    if (err) {
                        resolve({
                            code: 400,
                            msg: '语句错误：' + err
                        })
                    } else {
                        resolve({
                            code: 200,
                            data: results
                        })
                        connection.release() // 连接池释放
                    }
                })
            }
        })
    })
}

module.exports = sql
