const Demo=require("/Users/choejongheon/amc-web-project-demo/demo/demos/models/demo.model.js");


exports.create=(req,res)=>{
    console.log(req.body);
    if(!req.body){
        //req가 없으면
        res.status(400).send({
            message:"Contents is Empty!"
        })
    }

    Demo.create(req.body,(err,data)=>{
        console.log("here");
        if(err){
            console.log("Data Table Create Error");
            res.status(500).send({
                message:err.message || "Some error occured while create the Demo."
            });
            return; // 리턴 추가

        }
        else {
            console.log("Data Table Create Complete");
            
            res.status(200).send('데이터가 성공적으로 삽입됨');
        }
    });
}

exports.findOne=(req,res)=>{
    console.log('req');
    Demo.findByID(req.params.id,(err,data)=>{
        console.log("findOne");
        if(err){
            if(err.kind==="not found"){
                req.status(404).send({
                    message:"Not Found Demo with id ${req.params.id}."
                });
            }
        }
    })
}