import mongoose from "mongoose";
import Destination from "../models/destination.js";

export const getDestination = async (req, res) => {    
    try {

        const destination = await Destination.find({},{__v:0,_id:0});
        

        res.status(200).json(destination);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createDestination = async (req,res) => {
    const post = req.body;
    const newPost = new Destination (post);

    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}