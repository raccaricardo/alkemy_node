const { Router } = require('express');

const { 
    deleteCharacter,
    detailChar,
    editCharacter,
    getList,
    getListFilter,
    postCharacter
} = require('../controllers/characters.controllers');

const router = Router();


router.get('/', getListFilter);
router.get('/:id', detailChar);

router.get('/list', getList);


router.post('/', postCharacter);

router.put('/:id', editCharacter)

router.delete('/:id', deleteCharacter);

module.exports = router;