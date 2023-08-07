import mongoose from "mongoose";

const destinationSchema = mongoose.Schema({
    nom:String,
    lieu: String,
    description: String ,
    note:Number,
    contentWebView:String,
    urlImage:String
})

export default mongoose.model("Destination", destinationSchema);
