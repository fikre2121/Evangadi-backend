const dbconnection = require("../db/dbconfigl");
const { StatusCodes } = require("http-status-codes");

async function sendAnswer(req, res) {
  const { answer } = req.body;
  const { userid } = req.user;
  const { questionid } = req.params;

  if (!answer) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "fill the reqierd fild" });
  }

  try {
    await dbconnection.query(
      "INSERT INTO 	answers(questionid,answer,userid) VALUES(?,?,?)",
      [questionid, answer, userid]
    );
    res.json({ msg: " answer is succesfully posted" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "somthing went wrong,try again later" });
  }
}

async function getAnswer(req, res) {
  const { questionid } = req.params;

  try {
    const [rows] = await dbconnection.query(
      `SELECT a.answer, u.username
   FROM answers a
   JOIN users u ON a.userid = u.userid
   WHERE a.questionid = ?
   ORDER BY a.answerid DESC`,
      [questionid]
    );

   return res.json(rows);
   
  } catch (err) {
    console.error(err.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong" });
  }
}
module.exports = { sendAnswer, getAnswer };
