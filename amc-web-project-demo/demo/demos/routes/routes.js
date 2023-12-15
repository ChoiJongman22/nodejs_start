
const demo=require("/Users/choejongheon/amc-web-project-demo/demo/demos/controller/demo.controller.js");

const express=require('express');
const router=express.Router();

router.post("/studentcreate",demo.STUDENT_CREATE);
router.post("/homeworkcreate",demo.HOMEWORK_CREATE);
router.get("/getid",demo.FIND_STUDENT);
router.get("/getstudents",demo.GET_STUDENTS);
router.get("/gethomeworks/:id",demo.GET_HOMEWORKS);

console.log("Route ok");   

module.exports=router;