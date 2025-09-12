const express = require ('express');
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const UserController = require ('../controllers/userController')
const UserControll = new UserController();

/**
 * User routes
 */
router.get('/user/' ,verifyToken, UserControll.findAllUsers)
router.post('/user/',UserControll.registerUser)
router.get('/user/:idUser',verifyToken, UserControll.findUserByPk)
router.put('/user/:idUser',verifyToken, UserControll.updateUser)
router.delete('/user/:idUser',verifyToken, UserControll.deleteUser)

module.exports = router;