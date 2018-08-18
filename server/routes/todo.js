var express = require('express')
var router = express.Router()
const todoCon = require('../controllers/todoController.js')
var userCon = require("../controllers/userController.js")


router.post('/addTask',userCon.authentication,todoCon.addTask)
router.get('/alltask',userCon.authentication,todoCon.allTask)
router.delete('/delete/:id',todoCon.deleteTask)
router.put('/edit/:id',todoCon.updateTask)


module.exports = router