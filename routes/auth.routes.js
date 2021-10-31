const { Router } = require('express');

const {
    editUser,
    deleteUser,
    login, 
    register
} = require('../controllers/auth.controllers');

const router = Router();


router.get('/', login);
router.put('/:id', editUser);
router.post('/', register);
router.delete('/:id', deleteUser);






module.exports = router;