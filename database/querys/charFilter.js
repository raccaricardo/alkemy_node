const Character = require('../../models/character');
const charFilter = async( params ) =>{

    try {

    let paramsFilter = {};

    for (let property in params) {
        if(params[property]){
            paramsFilter = {...paramsFilter, [property]: params[property]};
        }
    }

    const char = await Character.findAll({ 
        where: paramsFilter
    });
    return char;
} catch (error) {
    console.log(error);
    return null;
}


    
        

}


module.exports = charFilter;