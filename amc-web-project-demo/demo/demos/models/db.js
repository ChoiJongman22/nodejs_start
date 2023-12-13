const mysql = require("mysql2");
const dbConfig = require("/Users/choejongheon/amc-web-project-demo/demo/demos/config/mysql.js");

var connection=mysql.createPool({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DB
});

connection.getConnection((err,connection)=>{
    if(err){
        console.log(err);
        throw err;
    }
    else{
        connection.release();
        console.log("DB 접속 성공");
    }
});

module.exports=connection;
