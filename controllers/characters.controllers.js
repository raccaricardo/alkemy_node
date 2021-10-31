

const fs = require('fs');

const { uploadFile } = require('../helpers/uploadFile');
const charFilter = require('../database/querys/charFilter');

const Character = require('../models/character');
const CharFilm = require('../models/charfilm');


const detailChar = async (req, res) => {
    const { id } = req.params;
    const char = await Character.findOne({where:{id}});
    console.log(char);
    if(!char){ 
        return res.status(404).json({msg: 'No character found'});
    }
    res.json({ 
        char
    });
}
const postCharacter = async (req, res) =>
{
    try {
        
        const { 
            name, 
            age, 
            weight, 
            history, 
            filmsorseries  } = req.body;
            console.log(name);
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        const image = await uploadFile(req.files.file, 'characters');
        const char = await Character.create({
            name, 
            age, 
            weight, 
            history, 
            image
        })
        if(filmsorseries){  
            const arr = filmsorseries.split(',');
        for(let i = 0; i < arr.length; i++){
            const charFilm = await CharFilm.create({
                id_character: char.id,
                id_film: arr[i]
            })
            console.log(charFilm);
        }
        }
        res.status(201).json({
            char,
            msg: 'char created',
        });
    } catch (error) {
        console.log(`problems to postCharacter: ${error}`)
        res.json(error);
    }
}
const editCharacter = async (req, res) =>
{
    try {

        const { id } = req.params;
        const {
            name,
            age,
            weight,
            history,
        } = req.body;
        // comparar databa de db con la nueva data. Agregar edicion de imagen
        let oldData = await Character.findOne({where:{id}})
        if(!oldData){
            res.status(404).json({ msg: 'character id not found' }) ;
        }
        let image = null;
        if(req.files && Object.keys(req.files).length > 0 ){
            try {
                image = await uploadFile(req.files.file, 'characters');
                
            } catch (error) {
                console.log(`req.files.file not found : \n ${error}`)
            }
            
            //Delete old image
            if(image){
                fs.unlink(oldData.image, (err) => {
                if(err){ 
                    console.log(err);
                }
                });
            }
        }
        await Character.update({
            name: name || oldData.name, 
            age: age || oldData.age, 
            weight: weight || oldData.weight, 
            history: history || oldData.history, 
            image: image || oldData.image,
        },{
            where:{ id }
        });
        res.json({ msg: 'character edited' })

    } catch (error) {
        console.log(error);
        res.status(404).json({ msg: 'Bad request editing character', error });
        throw new Error(error);
    }
}
const getListFilter = async (req, res) =>
{
    try {
        const { name, age, weight, movies } = req.query;

        const char = await charFilter({ name, age, weight, movies });

        if(!char){
            const chars = await Character.findAll({
                attributes: ['name', 'image']
            }) 
            return res.json(chars);
        }
       
        res.json(char);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'error to get characters' });
    }
}
const getList = async (req, res) =>{ 

    try {

        const chars = await Character.findAll(); 
      
        res.json({chars});

    } catch (error) {
        console.log(error); 
        res.status(500).json({msg: 'error to get List characters'})
    }
}

const deleteCharacter = async (req, res) =>
{
    try {
        const { id } = req.params;
        const char = await Character.destroy({
            where: { id }
        }) 
        if(!char){
            res.status(400);
        }
        res.status(200).json({msg: 'Character Deleted'})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error to delete character' });
    }
}

module.exports = {
    deleteCharacter,
    detailChar,
    editCharacter,
    getList,
    getListFilter,
    postCharacter

}
