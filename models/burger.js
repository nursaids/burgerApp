const orm = require ("../config/orm");
var burger = {
/**
 * @param {Function} cb
 */
all: function (cb){
    orm.selectAll("burgers", function (res){
        cb(res);
    });
},
/**
 * @param {String} burgerName
 * @param {Function} cb
 */

 create: function (burgerName, cb){
     orm.insertOne("burgers", ["burger_name", "devoured"], [burgerName, 0], function(res){
         cb(res);
     });
 },

 /**
  * @param {String} burgerName
  * @param {Function} cb
  */
 devour: function (id, cb){
     orm.updateOne("burgers", { devoured: 1}, "id = " + id, function (res){
         cb(res);
     });
 }
};

module.exports = burger;
