const Demo=require("../models/demo.model.js");

exports.create=(req,res)=>{
    if(!req.body){
        //req가 없으면
        res.status(400).send({
            message:"Contents is Empty!"
        })
    }
}