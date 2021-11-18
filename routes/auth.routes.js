const { Router } = require('express');
const { check } = require("express-validator");
const { login, register, listUsers } = require('../controllers/user.controller');
const router = Router();
const { validateFields } = require('../middlewares/validateFields')

router.get("/", (req, res) => {
    res.json({msg: "Hello World"});
})
router.get("/list", [
    
], listUsers);

router.post("/login", [
    check('email', "email is required").notEmpty(),
    check('password', "password is required").notEmpty(),
    check('email', "email isn`t an email").isEmail(),
    check("password", "password must be at least 6 charset").isLength({ min: 6 }), 
    validateFields
], login);

router.post("/register", [
    check('email', "email is required").notEmpty(),
    check('password', "password is required").notEmpty(),
    check('email', "email isn`t an email").isEmail(),
    check("password", "password must be at least 6 charset").isLength({ min: 6 }), 
    validateFields
], register);






module.exports = router;