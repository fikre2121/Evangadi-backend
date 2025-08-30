const dbconnection = require("../db/dbconfigl");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");


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
      return res.status(StatusCodes.BAD_REQUEST).json({ msg: "usere already existed" });
    }
    // check the password streangth
    if (password.length <= 8) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "password should be atleast 8 characters" });
    }

    // incrpt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    await dbconnection.query(
      "INSERT INTO users(username, firstname, lastname, email, password) VALUES(?,?,?,?,?)",
      [username, firstname, lastname, email, hashedPassword]
    );

    return res.status(StatusCodes.CREATED).json({ msg: "User registered successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "somthing went wrong,try again later" });
  }
}

async function login(req, res) {
  res.end("login");
}
async function check(req, res) {
  res.end("check");
}

module.exports = { register, login, check };
