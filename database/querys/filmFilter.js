const FilmOrSerie = require('../../models/character');

const filmFilter = async( params ) =>{

    try {

    let paramsFilter = {};

    for (let property in params) {
        if(params[property]){
            paramsFilter = {...paramsFilter, [property]: params[property]};
        }
    }

    const films = await FilmOrserie.findAll({ 
        where: paramsFilter
    });
    return films;
} catch (error) {
    console.log(error);
    return null;
}

}


module.exports = filmFilter;