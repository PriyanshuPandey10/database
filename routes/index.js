var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function(req, res) {
    res.render("index");
});

router.get("/create", async function(req, res) {
    
        const usercreated = await userModel.create({
            userName: "Priyanshu Pandey",
            age: 21,
            name: 'Rahul'
        });
        res.send(usercreated);

});

module.exports = router;
