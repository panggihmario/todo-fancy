var express = require('express')
var router = express.Router()
const todoCon = require('../controllers/todoController.js')
var userCon = require("../controllers/userController.js")


router.post('/addTask',userCon.authentication,todoCon.addTask)
router.get('/alltask',userCon.authentication,todoCon.allTask)
router.delete('/delete/:id',userCon.authentication,todoCon.deleteTask)
router.put('/edit/:id',userCon.authentication,todoCon.updateTask)


module.exports = router