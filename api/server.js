const path = require("path");

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const ExpressMongoSanitize = require("express-mongo-sanitize");
const xss = require('xss-clean')
const hpp = require("hpp");
const { default: rateLimit } = require("express-rate-limit");

dotenv.config({ path: "config.env" });
const DbConnection = require("./src/config/DbConnections");
const ApiError = require("./utils/ApiError");
const GlobalError = require("./src/middlewares/ErrorMiddleware");
const MountRoutes = require("./src/routes/Index");

//Connect with Data Base
DbConnection();

// express App
const App = express();

//Middlewares
App.use(express.json({limit : '20kb'}));
App.use(express.static(path.join(__dirname,'uploads')))

if (process.env.NODE_ENV === "development") {
  App.use(morgan("dev"));
  console.log(`node : ${process.env.NODE_ENV}`);
}

// To apply data sanitization
App.use(ExpressMongoSanitize());
App.use(xss());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15 minutes
  max: 100 // limit each IP to 100 requests per window (here, per 15min)
})

// Apply the rate limiting middleware to all requests
App.use('/api', limiter);

// Middleware to protect against HTTP Parameter Pollution attacks
App.use(hpp({whitelist : ['price','sold','quantity','ratingsAverage','ratingsQuantity']}));

MountRoutes(App);




App.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route ${req.originalUrl}`, 400));
});

// Global error handling middleware for express
App.use(GlobalError);

const PORT = process.env.PORT || 8000;
const server = App.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

// Handle rejection outside express
process.on("unhandledRejection", (err) => {
  console.error(`UNHANDLED REJECTION! ${err.name} | ${err.message}`);
  server.close(() => {
    console.error("Shutting down...");
    process.exit(1);
  });
});
