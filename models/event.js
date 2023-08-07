import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    nom:String,
    lieu: String,
    description: String ,
    note:Number,
    contentWebView:String,
    urlImage:String
})

export default mongoose.model("Event", eventSchema);
