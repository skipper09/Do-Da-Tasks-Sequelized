var express = require("express"),
    router = express.Router(),
    tasks = require("../models/tasks.js");

router.get("/", function(req,res){
    tasks.selectAll(function(data){
        var hbsObject = {
            tasks: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/", function(req,res){
    tasks.insertOne(req.body.taskinput, function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req,res) {
    tasks.updateOne(req.body.completed,req.params.id, function() {
        res.redirect("/");
    });
});

router.delete("/:id", function(req,res){
    tasks.deleteOne(req.params.id, function() {
        res.redirect("/");
    });
});

module.exports = router;