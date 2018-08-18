var express = require('express')
var router = express.Router()
const todoCon = require('../controllers/todoController.js')
var userCon = require("../controllers/userController.js")


<<<<<<< HEAD
router.post('/addTask',userCon.authentication,todoCon.addTask)
=======
router.post('/task',userCon.authentication,todoCon.addTask)
>>>>>>> 66acf1aa09902177cf7c40ec90dfcb698a421467
router.get('/alltask',userCon.authentication,todoCon.allTask)
router.delete('/delete/:id',todoCon.deleteTask)
router.put('/edit/:id',todoCon.updateTask)


<<<<<<< HEAD
=======


>>>>>>> 66acf1aa09902177cf7c40ec90dfcb698a421467
module.exports = router