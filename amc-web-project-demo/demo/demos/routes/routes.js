
const demo=require("/Users/choejongheon/amc-web-project-demo/demo/demos/controller/demo.controller.js");

const express=require('express');
const router=express.Router();

router.post("/studentcreate",demo.STUDENT_CREATE);
router.get("/getid",demo.findOne);
console.log("Route ok");   

module.exports=router;