const expressRout = require("express")
const bodyParser = require("body-parser")
const appController = require("../controllers")
const router = expressRout.Router()
const authMiddleWares = require("../middlewares/auth")

router.post('/registration',appController.registrationNewUser)
router.post('/login',bodyParser.urlencoded({extended:false}),appController.login)
router.post('/logout',appController.logout)
router.get('/activate/:link')
router.get('/refresh',appController.refresh)
router.get('/posts', appController.posts)

module.exports = router
