var orm = reqire("../config/orm.js");

var burger = {
    /** /
    *@param{function} cb
    */
   all: function(cb){
       orm.selectAll("burgers", function(res){
           cb(res);
       });
       *param
   }
}