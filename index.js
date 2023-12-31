import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from "./routes/posts.js";
import userRoutes from './routes/users.js';
import hebergementRoutes from "./routes/hebergement.js";
import destinationRoutes from "./routes/destination.js";
import eventRoutes from "./routes/event.js";


const app = express();


app.use(bodyParser.json({ limit: "30mb" , extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb" , extended: true }));
app.use(cors());


app.use('/posts',postRoutes);
app.use('/user',userRoutes);
app.use('/hebergement',hebergementRoutes);
app.use('/destination',destinationRoutes);
app.use('/event',eventRoutes);


const CONNECTION_URL = 'mongodb+srv://ranivoaritidasandy:Gohqac-jedmab-7pitgu@cluster0.nkkbyzl.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8080; 

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch( (error) => console.log(error.message));
