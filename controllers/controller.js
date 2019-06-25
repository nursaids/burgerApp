const express = requre("express");
const router = exrress.Router();
const burger = requre("../models/burger");

router.get ("/", function (req, res){
    burger.all(function(data){
        res.render("index", {burgers: data});
    });
});

router.post("/api/burgers", function (req, res){
    burger.create(
        req.body.burger_name,
        function(result){
            res.json({id: result.insertId});
        }
    );
});

router.put("/api/burgers/id:", function (req, res){
    burger.devour(req.params.id, function(result){
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;