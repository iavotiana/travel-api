import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async ( req, res) => {

    const { email, password } = req.body;
    
    try {
        const existingUser = await User.findOne({ email },{__v:0,_id:0});

        if(!existingUser) return res.status(404).json({ message: "l'email n'existe pas."});

        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);

        console.log("eo1")
        if(!isPasswordCorrect) return res.status(400).json({ message:"Mot de passe incorrect."});

        const token = jwt.sign({ email: existingUser.email, id:existingUser._id }, 'test', { expiresIn: "12h"});
        console.log("tonga")

        res.status(200).json({ UserModel:existingUser , token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong.'});
    }
}

export const signup = async (req, res) => {
    const { nom,email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email});

        if(existingUser) return res.status(400).json({ message: "L'email existe déja."});

        concole.log("signup oui")

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ nom,email,password:hashedPassword})

        const token = jwt.sign({ email:result.email, id:result._id, nom:result.nom}, 'test' , { expiresIn: "12h"});

        res.status(200).json({ UserModel:result, token });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong.'});

    }
    
}
