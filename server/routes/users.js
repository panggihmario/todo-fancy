var express = require('express');
var router = express.Router();
var userCon = require("../controllers/userController.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',userCon.register)
router.post('/login',userCon.login)
router.post('/loginfb',userCon.getDataFb)




module.exports = router;
