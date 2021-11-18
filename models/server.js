const express  = require('express');

require("dotenv").config();
const { startDB } = require("../database/config");

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.paths = {
            auth: "/api/auth"
        };

        this.connectDB();
        this.middlewares();
        this.routes();
    }
    connectDB() {
        // Database
        startDB();
    }
    middlewares(){
        this.app.use(express.json());

    }
    routes(){
        this.app.use(this.paths.auth, require("../routes/auth.routes"))
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server on port ${this.port}`);
        });
    }
}


module.exports = Server;