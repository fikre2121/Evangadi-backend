const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 4000;

// Database connection
const dbconnection = require("./db/dbconfigl");

// Routes
const userRoutes = require("./routs/userRouter");
const questionRoutes = require("./routs/questionRoutes");
const answerRoutes = require("./routs/answerRouts");

// Middlewares
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://golden-medovik-db5600.netlify.app",
    ],
    credentials: true,
  }),
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answers", answerRoutes);

async function start() {
  try {
    await dbconnection.execute("SELECT 'test'");

    console.log("Database connection established.");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error.message);
  }
}

start();
