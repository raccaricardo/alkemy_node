
const Film = require('../models/film');

const addFilm = async ( req, res ) =>{
    try {
        const { title, releaseat, qualification } = req.body;
        const film = new Film({ title, releaseat, qualification });
        await film.save();
        res.status(201).json{{ok: true, film}};
    } catch (error) {
        console.error(error);
        res.status(500).json({ok: false, error})
    }
}

const getFilm = async ( req, res ) =>{
    try {
        const { id } = req.params;
        const film = await Film.findById(id);
        if(!film){
            return res.status(404).json({ok: true, error: 'ID Film not found'});
        }
        res.json({ok: true, film});
    } catch (error) {
        console.error(error);
        res.status(500).json({ok: false, error})
    }
}

const getFilms = async ( req, res ) =>{
    try {
        const films = await Film.findAll();
        res.json({ok: true, films});
    } catch (error) {
        console.error(error);
        res.status(500).json({ok: false, error})
    }
}

const deleteFilm = async ( req, res ) =>{
    try {
        await Film.destroy({
            where: {
                id: req.params.id
            }
        });
        res.(200).json({ok: true, message: 'Film deleted'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ok: false, error})
    }
}

module.exports ={
    addFilm,
    deleteFilm,
    getFilm,
    getFilms
}