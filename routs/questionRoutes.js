const exppres = require("express");
const router = exppres.Router();
const  {postquostion,getAllquestions } = require("../controller/questionController");

// the middleware
const authMiddleware = require("../Middleware/authomiddleware");

// Posting question
router.post("/post",  authMiddleware,postquostion);

// geting all questions
router.get("/getAllQuestions", authMiddleware, getAllquestions);

module.exports = router;
