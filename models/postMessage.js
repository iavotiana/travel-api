import mongoose from "mongoose";

const postSchema = mongoose.Schema ({
    title:String,
    picture: String,
    details: String ,
    comments: { type: [String], default: [] },
});

const postMessage = mongoose.model('PostMessage', postSchema);

export default postMessage;