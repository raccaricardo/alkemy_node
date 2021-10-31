const { Router } = require('express');
const { 
    getFilm, postFilm
} = require('../controllers/filmorserie.controllers');

const router = Router();


router.post('/', postFilm );

router.get('/:id', getFilm );

module.exports = router;