const User = require('../models/user');

const validateJWT = async(req, res, next) =>{
    const token  = req.header("x-token");
    if(!token){
        return res.status(401).json({
            ok:true,
            message: "Token not received"
        })
    }
    try {
        const {uid} = jwt.verify(token, process.env.PRIVATE_KEY_TOKEN);
        const user = await User.findOne({
            where: {
                id: uid,
                active: 'active'
            }
        });
        if ( !user ) {
			return res.status(401).json({
				msg: "invalid token- user not found in db"
			});
		}else{
			req.uid = user.id;
            console.log(req.uid);
		}
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({
			msg: "invalid token"
		});
    }
}

module.exports = {
    validateJWT
};