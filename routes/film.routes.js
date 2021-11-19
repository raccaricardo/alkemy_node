const { Router } = require('express');

const { validateFields } = require('../middlewares/validateFields')
const { validateJWT } = require('../middlewares/validate-jwt')
const { 
    addFilm,
    getFilm,
    getFilms,
    deleteFilm
} = require('../models/film');

const router = Router();

router.post('/', [
    validateJWT,
    validateFields
] , addFilm);

router.get('/:id', getFilm);

router.get('/', getFilms);

router.delete('/:id', [
    validateJWT,
    validateFields
] , deleteFilm);