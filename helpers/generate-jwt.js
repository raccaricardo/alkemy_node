var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

const generateJWT = ( uuid = '' ) =>{

    return new Promise((resolve, reject ) =>{
        const privateKey = process.env.PRIVATE_KEY_TOKEN;
        const payload = { uuid };
        jwt.sign(payload, privateKey,{
            expiresIn: "12h"
        }, (err, token) =>{
                if(err){
                    console.error(error);
                    reject("problems with token generation: \n" + error);
                }else{
                    resolve(token);
                }
            }
        );
    });
};

module.exports = {
    generateJWT
}