
const filmFilter = require('../database/querys/filmFilter');
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
        const { title, age, qualification, id_gender } = req.body;
        let image = null;
        if(req.files && Object.keys(req.files).length > 0 ){
            image = await uploadFile(req.files.file, 'films');

        }
        if(!image){
            return res.status(400).json({ msg: 'image is required'});
        }
        const filmorserie = await FilmOrSerie.create({
            title, 
            age, 
            qualification, 
            image,
            id_gender
        }) 
        res.status(201).json({filmorserie});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
 
        
    }
}

const getListFilter = async (req, res) => {
    try {
        const { title, age, qualification, image, id_gender, desc, asc } = req.query;

        if(desc){
            const films = await FilmOrSerie.findAll({ 
                order:[ ['qualification', 'DESC' ]]
            })
            return res.json({ films });
        }
        if(asc){
            const films = await FilmOrSerie.findAll({ 
                order:[ ['qualification', 'ASC' ]]
            })
            return res.json({ films });
        }
        
        const films = await filmFilter({ title, age, qualification, image, id_gender });

        // if(!films){
        //     const films = await Character.findAll({
        //         attributes: ['name', 'image']
        //     }) 
        //     res.json({ films })
        //     return res.json(chars);
        // }
       
        // res.json(films);


    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'error to get films or series' });
    }
}



module.exports = {
    getFilm,
    postFilm,
    getListFilter
}