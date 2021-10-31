const fs = require('fs');
const { Gender } = require('../models/');
const { uploadFile } = require('../helpers/uploadFile');

// fs.unlink(filePath, ()=>{ console.log("deleted")})
Gender.sync();
const postGender = async(req, res)=>{
    try {
        const { name } = req.body;
        if(!name){
            return res.status(400).json({ msg:'name is required'});
        }
        let image = null;
        if(req.files && Object.keys(req.files).length > 0 ){
            try {
                image = await uploadFile(req.files.file, 'gender');
                
            } catch (error) {
                console.log(`req.files.file not found : \n ${error}`)
            }
            
 
        }
     
        const gender = await Gender.create({
            name,
           image
        })
        
        return res.status(201).json({gender});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'failed to create gender', error})
    }
}
const getList = async(req, res)=>{
    try {
        const listGender = await Gender.findAll();
        res.status(200).json({ listGender });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'something went wrong', error});        
    }
}







module.exports = {
    postGender,
    getList
}