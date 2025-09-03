const express = require("express");
 const router=express.Router()
//  authenthication
const authMiddleware = require("../Middleware/authomiddleware");


// user controllers
const{register,check,login}=require("../controller/userController")

 // registration

router.post("/register",register)

// log in user

router.post("/login",login);


// check user

router.get("/check",authMiddleware,check);

module.exports=router