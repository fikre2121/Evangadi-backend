
// // directory contreller
// export const getAllusers = async (req, res) => {
//   res.send({ msg: "here are all the users!" });
// };


// // devnt cont
// export const postEvent = async (req, res) => {
//   res.send({ msg: "event posted successfully" });
// };

// export const getEvents = async (req, res) => {
//   res.send({ msg: "here all the events!" });
// };
// // job controller
// export const postJob = async (req, res) => {
//   res.send({ msg: "job or internship  posted successfully" });
// };

// export const getJobes = async (req, res) => {
//   res.send({ msg: "here all the jobs and internships!" });
// };
// // landing on
// export const getUrgentEvents = async (req, res) => {
//   res.send({
//     msg: "here are all the urgent events to be shown on the landing page",
//   });
// };

// // user con
// export const setUpProfile = async (req, res) => {
//   res.send({ msg: "profile set up works!" });
// };

// export const editProfile = async (req, res) => {
//   res.send({ msg: "you can eddit your profile!" });
// };


// // the following are the roouts
// // direcory
// import express from "express";
// const router = express.Router();
// import { getAllusers } from "../controllers/directoryController.js";

// // to get all the  kshs alum user's info

// router.get("/all-users", getAllusers);

// export default router;

// // event rout
// import express from 'express'
// const router = express.Router();
// import { postEvent,getEvents } from "../controllers/eventcontroller.js";

// // get events rout
// router.get("/getEvents", getEvents);

// // post event rout
// router.post("/create",postEvent)


// export default router;
// // job rou
// import express from 'express'
// const router = express.Router();
// import { postJob,getJobes } from "../controllers/jobcontroller.js";

// // get events rout
// router.get("/getjobs", getJobes);

// // post event rout
// router.post("/create",postJob)


// export default router;

// // **landing route
// import express from 'express'
// const router = express.Router();
// import { getUrgentEvents } from "../controllers/landingController.js";

// //   to get urgetnt events

// router.get("/urgentEvents",getUrgentEvents );

// // to get anouncements



// export default router;
// // **user rout
// import express from 'express'
// const router = express.Router();
// import { setUpProfile, editProfile } from "../controllers/usercontroller.js";

// // user sets up his profile 

// router.post("/setup-profile", setUpProfile);

// // user eddits his profile

// router.post("/edit-profile",editProfile);

// export default router;
// // *****the app.js
// //const express = require("express");
// import express from "express";
// import cors from "cors";
// //const pool = require("./config/db"); // your db.js

// import pool from "./src/config/db.js";
// import dotenv from "dotenv";
// dotenv.config();
// const app = express();
// const PORT = 3000;

// // Global middleware
// app.use(cors());
// app.use(express.json());

// //  routs middleware fils
// import authRoute from "./src/routes/authRoute.js";
// import userRoute from "./src/routes/userRoute.js";
// import directoryRoute from "./src/routes/directoryRoute.js";
// import eventRoute from "./src/routes/eventRoute.js";
// import jobRoute from "./src/routes/jobRoute.js";
// import landingRoute from "./src/routes/landingRoute.js";
// // Routes
// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// // app.use("/api/dashboard", dashboardRoute);
// // app.use("/api/messages", messageRoute);
// app.use("/api/events", eventRoute);
// app.use("/api/jobs", jobRoute);
// app.use("/api/landing", landingRoute);
// app.use("/api/directory", directoryRoute);
// // app.use("/api/resources", resourceRoute);

// // Test route to check database connection
// app.get("/", async (req, res) => {
//   try {
//     // Simple query to check connection
//     const result = await pool.query("SELECT 1");
//     res.send("Database connected successfully!");
//   } catch (err) {
//     console.error("Database connection error:", err);
//     res.status(500).send("Database connection failed");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


