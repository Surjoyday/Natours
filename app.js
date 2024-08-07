const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// MIDDLEWARE
app.use(morgan("dev"));

app.use(express.json());

// MIDDLEWARE TO SERVE STATIC FILES
app.use(express.static(`${__dirname}/public`));

// app.use((req, res, next) => {
//   console.log("Hello from Middleware 🙌");
//   next();
// });

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
