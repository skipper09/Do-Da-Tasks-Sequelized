var orm = require("../config/orm.js");


var tasks = {
    selectAll: function(cb) {
        orm.selectAll("tasks", function(res) {
            cb(res);
        });
    },
    insertOne: function(val, cb) {
        orm.insertOne("tasks", "task_name", val, function(res) {
            cb(res)
        });

    },
    updateOne: function(val1, val2, cb) {
        orm.updateOne("tasks", "complete", val1, "id", val2, function(res){
            cb(res);
        });
    },
    deleteOne: function(val, cb) {
        orm.deleteOne("tasks", "id", val, function(res){
            cb(res)
        });
    }
}

module.exports = tasks;