const mongoose = require("mongoose")

const DbConnection = () => {
 mongoose
 .connect(process.env.DB_URI)
 .then((conn) => {
    console.log(`DataBase Connected: ${conn.connection.host}`);
 })
 
};

module.exports = DbConnection;