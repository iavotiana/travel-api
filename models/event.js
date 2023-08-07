import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    nom:String,
    lieu: String,
    description: String ,
    note:Number,
    contentWebWiew:String,
    urlImage:String
})

export default mongoose.model("Event", eventSchema);
