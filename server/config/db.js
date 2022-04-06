const mysql = require('mysql');

const db = mysql.createPool({
    host: 'my-blog.cgi39jzcxywf.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'songhwa',
    password: 'hansong3302',
    database: 'my-blog'
});

module.exports =db;