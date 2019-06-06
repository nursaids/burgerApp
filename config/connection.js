var mysql = req ("mysql");

require(dotenv).config()

var keys = require("../keys.js");

let connection;

if (progress.env.JAWSDB_URL){
    connecetion = mysql.createConnection(process.env.JAWSDB_URL);}
        else{
    
        connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user:"root",
            password:keys.rootPassword,
            database: "burger_db"
        });
    
}
connection.connect(function(err){
    if (err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
    
module.exports = connection;