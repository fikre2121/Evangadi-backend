
const mysql2=require("mysql2")
require("dotenv").config();
const dbconnection = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: process.env.DB_CONNECTION_LIMIT || 10,
  port: process.env.DB_PORT || 3306,
});


// dbconnection.execute("select 'test' ",(err,result)=>{
// if(err){
//    console.log(err.message) 
// }else{
//      console.log(result); 
  
// }
// })
module.exports=dbconnection.promise()