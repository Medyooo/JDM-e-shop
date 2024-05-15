const path = require("path");

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "config.env" });
const DbConnection = require("./src/config/DbConnections");
const ApiError = require("./utils/ApiError");
const GlobalError = require("./src/middlewares/ErrorMiddleware");
const MountRoutes = require("./src/routes/Index")

//Connect with Data Base
DbConnection();

// express App
const App = express();

//Middlewares
App.use(express.json());
App.use(express.static(path.join(__dirname,'uploads')))

if (process.env.NODE_ENV === "development") {
  App.use(morgan("dev"));
  console.log(`node : ${process.env.NODE_ENV}`);
}

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
