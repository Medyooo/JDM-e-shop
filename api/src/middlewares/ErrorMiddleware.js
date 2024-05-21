const ApiError = require("../../utils/ApiError");


const SendErrorForDevMode = (err, res) => 
  res.status(err.statusCode).json({
        status: err.status, 
        error: err,
        message: err.message, 
        stack: err.stack
       });

const SendErrorForProdMode = (err, res) => 
  res.status(err.statusCode).json({
         status: err.status, 
         message: err.message, 
        });
        
const HandleJwtInvalidSignature = () => new ApiError("Invalid token, please login again..",401);
const HandleJwtExpired = () => new ApiError("Expired token, please login again..",401);

const GlobalError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
  if(process.env.NODE_ENV === 'development'){
    SendErrorForDevMode(err, res);
  }else{

    if(err.name === 'JsonWebTokenError') err = HandleJwtInvalidSignature();
    if(err.name === 'TokenExpiredError') err = HandleJwtExpired();

    SendErrorForProdMode(err, res);
  }
 };

 module.exports = GlobalError;