const express = require("express");
 const router=express.Router()
// user controllers
const{register,check,login}=require("../controller/userController")

 // registration

router.post("/register",register)

// log in user

router.post("/login",login);


// check user

router.get("/check",check);

module.exports=router