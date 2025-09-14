const exppres = require("express");
const router = exppres.Router();
const { sendAnswer, getAnswer } = require("../controller/answerController");
// the middleware
const authMiddleware = require("../Middleware/authomiddleware");

// Posting answer
router.post("/postanswers/:questionid", authMiddleware, sendAnswer);

// geting the answer
router.get("/getanswer/:questionid", authMiddleware, getAnswer);

module.exports = router;
