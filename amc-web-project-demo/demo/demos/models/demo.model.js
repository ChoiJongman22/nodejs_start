const db=require("/Users/choejongheon/amc-web-project-demo/demo/demos/models/db.js");

const Demo=function(demo){
    this.student_name=demo.student_name;
};

Demo.STUDENT_CREATE = (student_data, result) => {
    db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }

        connection.query('INSERT INTO student SET ?', student_data, (err, res) => {
            connection.release(); // 연결 해제
            if (err) {
                console.log('error', err);
                result(err, null);
                return;
            }

            console.log('Created Set: ', { id: res.insertId, student_name: student_data.student_name });
            console.log('Created Complete.');
            result(null, { id: res.insertId, student_name: student_data.student_name });
        });
    });
};

Demo.HOMEWORK_CREATE = (student_data, result) => {
    db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }

        connection.query('INSERT INTO homeworks SET ?', student_data, (err, res) => {
            connection.release(); // 연결 해제
            if (err) {
                console.log('error', err);
                result(err, null);
                return;
            }

            console.log('Created Set: ', { id: res.insertId, student_name: student_data.student_name });
            console.log('Created Complete.');
            result(null, { id: res.insertId, student_name: student_data.student_name });
        });
    });
};

Demo.FIND_STUDENT_ID=(id,result)=>{
    db.query("SELECT * FROM demos WHERE id = ${id}",(err,res)=>{
        if(err){
            console.log("error",err);
            result(err,null);
            return;
        }
        // if (res.length) {
        //     console.log("found tutorial: ", res[0]);
        //     result(null, res[0]);
        //     return;
        //   }
      
        //   // not found Tutorial with the id
        //   result({ kind: "not_found" }, null);
    })
}
module.exports=Demo;