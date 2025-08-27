
const mysql2=require("mysql2")
const dbconnection = mysql2.createPool({
  host: "localhost",
  user: "evangadi-admin",
  password: "123456",
  database: "evangadi-db",
  connectionLimit:10,
  port: 3306,
});


// dbconnection.execute("select 'test' ",(err,result)=>{
// if(err){
//    console.log(err.message) 
// }else{
//      console.log(result); 
  
// }
// })
module.exports=dbconnection.promise()