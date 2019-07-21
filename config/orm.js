var connection = require("../config/connection");


function printQuestionMarks(num) {
    var arr = [];
    for (let i = 0; i < num; i++) {
       array.push("?")
        
    }
    return arr.toString();
}




function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = " " + value + "";
            }
            arr.push(key + " = " + value);
        }
    }
    return arr.toString();
}

var orm = {
    all: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err,result){
            if (err){
                throw err;
            }
            // console.log(result)
            cb(result);
        })
    },

    create: function(table, cols, vals,cb){

     var queryString = "INSERT INTO " + table;

        queryString += "(";
        queryString += cols.toString();
        queryString += "VALUES(";
        queryString += printQuestionMarks(vals.legth);
        queryString += ")";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if(err){
                throw err;         
            }
            cb(result);
        })

    },

    update: function(table, cols, vals,cb){

        var queryString = "UPDATE " + table;

        queryString += "SET";
        queryString += objToSql(objColVals);
        queryString += "WHERE";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if(err){
                throw err;         
            }
            cb(result);
        })

    },

    delete: function(table, cols, cb){

        var queryString = "DELETE FROM " + table;

        queryString += "WHERE";
        queryString += condition;

        

        connection.query(queryString, vals, function(err, result){
            if(err){
                throw err;         
            }
            cb(result);
        })

    }

    
};

module.exports = orm;