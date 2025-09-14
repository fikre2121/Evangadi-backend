const express = require("express");
const app = express();
const port = 4000;
// db connection

const dbconnection = require("./db/dbconfigl");
//  routs middleware fils
const userRoutes = require("./routs/userRouter");
const questionRoutes = require("./routs/questionRoutes");
const answerRoutes = require("./routs/answerRouts");
// json middleware to extract json data

app.use(express.json());

// user routs middleware
app.use("/api/users", userRoutes);

// qostion routes middleware??

app.use("/api/questions",questionRoutes);

// answer routes middleware??

app.use("/api/answers",answerRoutes);


async function start() {
  try {
    const rows = await dbconnection.execute("select 'test' ");
    app.listen(port);

    console.log(rows);

    console.log("database connection established");

    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();


