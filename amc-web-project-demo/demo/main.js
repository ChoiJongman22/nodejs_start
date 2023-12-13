const express = require("express");
//const multer = require("multer");
const cors = require("cors");
//const fs = require("fs");

const bodyParser = require("body-parser");
const app = express();
var corsOption={
  origin: "http://localhost:8000"
}
app.use(bodyParser.json());
app.use(cors(corsOption));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

//app.use(express.json());
app.use(express.urlencoded({extended:true}));
const routes=require("/Users/choejongheon/amc-web-project-demo/demo/demos/routes/routes.js");
app.get("/",(req,res) => {
  console.log("hi");
  res.json({message:"Welcome!"});
});
app.use('/api',routes);
//require("/Users/choejongheon/amc-web-project-demo/demo/demos/routes/routes.js")(app);


const PORT=process.env.PORT||8000;
app.listen(PORT,()=>{
  console.log("Server is running on port ${PORT}.");
});