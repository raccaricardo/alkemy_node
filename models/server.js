const express = require('express');
const fileUpload = require('express-fileupload');
const sequelize  = require('../database/config');


class Server {

    
    constructor() {
        this.app = express();
        this.port = 8030;
        this.paths = {
            auth: '/api/auth',
            characters: '/api/characters',
            movies: '/api/movies',
            gender: '/api/gender'

        }
        this.connectDB();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use( fileUpload({ 
            useTempFiles: false,
            tempFileDir: '/tmp/',
            createParentPath: true
        }))
    }
    routes() {
        this.app.use( this.paths.auth, require('../routes/auth.routes'));
        this.app.use(this.paths.characters, require('../routes/characters.routes'));
        this.app.use(this.paths.movies, require('../routes/movies.routes'));
        this.app.use(this.paths.gender, require('../routes/gender.routes'));
        
    }
    async connectDB() {
        
       
        await sequelize
        .sync()
        .then(result => {
            // console.log(result);
            console.log( `DB sync succesfull`);
        })
        .catch(err => {
            console.log(`DB.sync failed  ${err}`);
            throw new Error( error);
        })
        // await dbConnection();
       
    }
    listen() {
        this.app.listen(this.port, ()=>{ console.log(`Listen to port: ${this.port}`);  })

    }
}
 
module.exports = Server;