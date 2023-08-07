import mongoose from "mongoose";
import Hebergement from "../models/hebergement.js";

export const getHebergement = async (req, res) => {    
    try {

        const hebergement = await Hebergement.find({},{__v:0,_id:0});
        
        res.status(200).json(hebergement);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createHebergement = async (req,res) => {
    const post = req.body;
    const newPost = new Hebergement (post);

    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message});
    }

}