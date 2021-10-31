const { Router } = require('express');
const { 
    getList,
    postGender

 } = require('../controllers/gender.controllers');




const router = Router();
router.post('/', postGender);
router.get('/', getList);



module.exports = router;