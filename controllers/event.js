import mongoose from "mongoose";
import Event from "../models/event.js";

export const getEvent = async (req, res) => {    
    try {

        const event = await Event.find({},{__v:0,_id:0});
        

        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEvent = async (req,res) => {
    const post = req.body;
    const newPost = new Event (post);

    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}