const { request, response } = require('express');
const { Op } = require('sequelize');

const User = require('../models/user');


User.sync();

const login = async (req, res) =>
{
    // console.log(User.sync());
    try {

        const { email, password } = req.body;


        const user = await User.findOne({
            where: {
                email,
                password
            }
        });
        console.log(user);
        (!user)
            ?
            res.status(404).json({
                msg: 'User or password incorrect'
            })
            :

            res.json({
                user,
                msg: 'Login successful'
            });

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

 

const register = async (req, res) =>
{
    try {
        const {
            name,
            email,
            password,
        } = req.body;

        const user = await User.create({
            name,
            email,
            password,
        })
            
            res.json({
                user,
                msg: 'Register finished'
            });
        } catch (error) {
            res.status(500).json({ msg: 'Error registering' });
        console.log(`auth.controller.register: ${error}`);
        throw new Error(error);

    }
}
const editUser = async (req, res) =>{
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        let oldData = await User.findOne({where:{id}})
        if(!oldData){
            res.status(404).json({ msg: 'user id not found' }) ;
        }
        
        await User.update({
            name: name || oldData.name, 
            email: email || oldData.email, 
            password: password || oldData.password, 
        },{
            where:{ id }
        });
        res.json({ msg: 'user edited' })
    } catch (error) {
        res.status(500).json({ msg: 'Error to edit user' });
    }
}
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.destroy({
            where: { id }
        }) 
        if(!user){
            res.status(400);
        }
        res.status(200).json({msg: 'User Deleted'})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error to delete user' });
    }
}
module.exports = {
    editUser,
    deleteUser,
    login,
    register
}