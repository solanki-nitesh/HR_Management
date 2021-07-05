const mongoose = require("mongoose");

// first for conformation purpose I have print console
console.log(`${process.env.ENVIRONMENT} server started`);

// I have used here mongo Atlas url so Here connection of mongoose
mongoose.connect(process.env.CONNECTION_URL_DB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
    // just print conformation message
    console.log("connected to DB");
});
