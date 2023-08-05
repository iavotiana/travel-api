import mongoose from "mongoose";

const hebergementSchema = mongoose.Schema({
    nom:String,
    lieu: String,
    description: String ,
    prix:Number,
    note:Number,
    contentWebWiew:String,
    urlImage:String
})

export default mongoose.model("Hebergement", hebergementSchema);
