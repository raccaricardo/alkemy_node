
const { uploadFile } = require('../helpers/uploadFile');
const  FilmOrSerie  = require('../models/filmOrSerie');

FilmOrSerie.sync();
const getFilm = async( req, res ) =>{ 

    try {
        const { id } = req.params;
        const film = await FilmOrSerie.findOne( id );
        if(!film){
            return res.status(400).json({
                msg: 'Film not found'
            })
        }
        res.json({ film })    
    } catch (error) {
        res.status(500).json({ error });
    }
}
const postFilm = async( req, res ) =>{ 
    try {
        const { title, age, qualification, idgender } = req.body;
        console.log(title, age, qualification, idgender)
        const image = await uploadFile(req.files.file, 'films');
        const filmorserie = await FilmOrSerie.create({
            title, 
            age, 
            qualification, 
            id_gender: idgender
        }) 
        res.status(201).json({filmorserie});
    } catch (error) {
 
        res.status(500).json({ error });
 
        
    }
}



module.exports = {
    getFilm,
    postFilm
}