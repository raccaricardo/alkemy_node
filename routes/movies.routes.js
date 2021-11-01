const { Router } = require('express');
const { 
    getFilm, 
    getListFilter,
    postFilm,
} = require('../controllers/filmorserie.controllers');

const router = Router();


router.post('/', postFilm );
router.get('/', getListFilter)
router.get('/:id', getFilm );

module.exports = router;