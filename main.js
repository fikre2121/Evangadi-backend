const express = require("express");
const app = express();
const port = 4000;
// db connection

const dbconnection = require("./db/dbconfigl");
// user routs middleware file
const userRoutes = require("./routs/userRouter");

// json middleware to extract json data

app.use(express.json());

// user routs middleware
app.use("/api/users", userRoutes);

// qostion routes middleware??

// answer routes middleware??

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

// app.get("/", (req, res) => {
//   res.json({ name: "fikre kindeya", status: "success" });
//   console.log("this is listenign");
// });
