const dbconnection = require("../db/dbconfigl");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;

  if (!email || !lastname || !firstname || !password || !username) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please provide all required information" });
  }
  try {
    const [existing] = await dbconnection.query(
      `SELECT username,userid FROM users where email =? or username = ?`,
      [email, username]
    );
    // check if the user is existed
    if (existing.length > 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "usere already existed" });
    }
    // check the password streangth
    if (password.length <= 8) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "password should be atleast 8 characters" });
    }

    // incrpt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await dbconnection.query(
      "INSERT INTO users(username, firstname, lastname, email, password) VALUES(?,?,?,?,?)",
      [username, firstname, lastname, email, hashedPassword]
    );

    return res
      .status(StatusCodes.CREATED)
      .json({ msg: "User registered successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "somthing went wrong,try again later" });
  }
}

async function login(req, res) {
  const { email, password } = req.body || {};
  if (!email || !password) {
     return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please inter all the required filds" });
  }

  try {
    const [user] = await dbconnection.query(
      `SELECT username,userid ,password FROM users where email =?`,
      [email]
    );
    if (user.length == 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "invalide credentials" });
    }
    //  compare the password
    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "your password is incorrect" });
    }

    
    const username = user[0].username;
    const userid = user[0].userid;
    const token = jwt.sign({ userid, username }, "secret", { expiresIn: "2d" });

    return res
      .status(StatusCodes.OK)
      .json({ msg: "user created succesfully", token });


  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "somthing went wrong,try again later" });
  }
}

async function check(req, res) {
  res.end("check");
}

module.exports = { register, login, check };
