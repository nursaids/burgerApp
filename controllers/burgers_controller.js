var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.all(function (data) {
        res.hbsObject = {
            burgers: data
        };

        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.create(
        [
            "name", "eaten"
        ], [
            req.body.name, req.body.eaten
        ],
        function (result) {
            res.sendStatus(200);
        });
});

router.put("/", function (req, res) {


    burger.update({
        eaten: 1
    }, "id =" + req.body.id, function (result) {

        res.sendStatus(200)

    })
})

module.exports = router;