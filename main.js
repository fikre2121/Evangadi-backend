const express = require("express");
const app = express(); 
const port=4000
// db connection

const dbconnection= require("./db/dbconfigl")
// user routs middleware file
const userRoutes=require("./routs/userRouter")

// user routs middleware 
app.use("/api/users",userRoutes)

// qostion routes middleware??

// answer routes middleware??



 async function start(){
try {
  const [rows] = await dbconnection.execute("select 'test' ");
console.log(rows)

} catch (error) {
  console.log(error.message);
}

}
start()

app.listen(port, (err) => {
  if(err){
console.log(err.message)
  }else{

    console.log(`Server running on http://localhost:${port}`);
  }
  
});







// app.get("/", (req, res) => {
//   res.json({ name: "fikre kindeya", status: "success" });
//   console.log("this is listenign");
// });