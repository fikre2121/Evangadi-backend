function register(req,res){
 res.end("register")
}

function login(req, res) {
  res.end("login");
}
function check(req, res) {
  res.end("check");
}
 
module.exports={register,login,check}