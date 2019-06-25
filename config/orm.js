var connection = require("./connection");
/** 
 * @param {object} ob 
 */

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

const orm = {
    /**
     * @param {String} table
     * @param {Function} cb
     */
    selectAll: function (table, cb){
        let queryString = `SELECT * FROM ${table};`;

        connection.query(queryString, function (err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    /**
     * @param {String} table
     * @param {String array} cols
     * @param {String array} vals
     * @param {Function} cb
     */
    insertOne: function (table, cols, vals, cb){
        let questionMarks = [];
        for (let i = 0; i < vals.legth; i++){
            questionMarks.push("?");
        }
        let queryString  = `INSERT INTO ${table} (${cols.toString()}) VALUES (${questionMarks.toString()})`;
        connection.query(queryString, val, function(err, result){
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    /**
     * @param {String} table
     * @param {Object} objColVals
     * @param {String} condition
     * @param {Function} cb

     */
    updateOne: function (table, objColVal, condition, cb){
        let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString,function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;