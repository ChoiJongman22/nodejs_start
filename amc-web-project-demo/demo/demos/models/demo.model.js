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

Demo.HOMEWORKLIST_CREATE = (student_data, result) => {
    db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }

        connection.query('INSERT INTO homeworklist SET ?', student_data, (err, res) => {
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


Demo.GET_STUDENTS=(id,result)=>{
    db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }

        db.query("SELECT student_name FROM student WHERE id = ?", [id], (err, res) => {
            connection.release(); // 연결 해제
            if (err) {
                console.log('error', err);
                result(err, null);
                return;
            }

            console.log('Created Set: ', { id: res.insertId, student_name: res });
            console.log('Created Complete.');
            result(null, { id: res.insertId, student_name: res});
        });
    });
}

Demo.GET_HOMEWORKS=(id,result)=>{
    console.log(id);
    db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        const qr="SELECT student_name FROM homeworks WHERE student_id = ?";

        db.query(qr, [id], (err, res) => {
            connection.release(); // 연결 해제
            if (err) {
                console.log('error', err);
                result(err, null);
                return;
            }

            console.log('check Set: ', { id: res.insertId, student_name: res });
            //console.log(typeof(res['student_name']));
            result(null, { id: res.insertId, student_name: res});
        });
    });
}

Demo.GET_HOMEWORKLIST=(id,result)=>{
    const getAssignmentIdQuery = "SELECT id FROM homeworks WHERE id = ?";
    db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        db.query(getAssignmentIdQuery,[id],(err,assignmentResults)=>{
            if(err){
                console.error('Error retrieving assignment ID:', err);
                result(err, null);
                return;
            }
            if (assignmentResults.length === 0) {
                console.log('No assignment found with the given name.');
                result(null, []);
                return;
            }
            console.log("여기로 들어왔음.")
            console.log(assignmentResults);
            const assignmentId=assignmentResults[0]["id"];
            console.log(assignmentId);

            const getStudentsQuery = "SELECT student.id , student.student_name FROM student" + " JOIN homeworklist ON student.id = homeworklist.student_id" + "WHERE homeworklist.homework_id = ?";
            const getStudentsQuery = "SELECT student.id, student.student_name FROM student " +
            "JOIN homeworklist ON student.id = homeworklist.student_id " +
            "WHERE homeworklist.homework_id = ?";
            db.query(getStudentsQuery , [assignmentId], (err, res) => {

                if (err) { 
                    console.log('error', err);
                    result(err, null);
                    return;
                }
                console.log('check Set: ', { id: res.insertId, student_name: res });
                //console.log(typeof(res['student_name']));
                result(null, { id: res.insertId, student_name: res});
                connection.release(); // 연결 해제
            });
            
        });
 
    });
}




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