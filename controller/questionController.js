const dbconnection = require("../db/dbconfigl");
const { StatusCodes } = require("http-status-codes");
const { v4: uuidv4 } = require("uuid");

async function postquostion(req, res) {
  const { title, description } = req.body;
  const { userid } = req.user;
  if (!title || !description) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please fill both the requerd filds" });
  }

  try {
    // the uuid or slag for url
    const questionid = uuidv4();
    // take a tage from the title
    let tag = title.split(" ")[0].toLowerCase();
    if (!tag || tag.length < 2) {
      tag = "general";
    }

    await dbconnection.query(
      "INSERT INTO 	questions(questionid,title, description,userid,tag) VALUES(?,?,?,?,?)",
      [questionid, title, description, userid,tag]
    );
    res.json({ msg: " qustion succesfully posted",tag });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "somthing went wrong,try again later" });
  }
}
 async function getAllquestions(req,res){
try {
  const [rows] = await dbconnection.query(
    `SELECT q.title, u.username
       FROM questions q
       JOIN users u ON q.userid = u.userid
       ORDER BY q.questionid DESC`
  );

   return res.json(rows);
} catch (error) {
  console.error(error.message);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Something went wrong" });
}
}
module.exports ={ postquostion,getAllquestions};
