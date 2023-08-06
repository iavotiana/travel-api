import  express   from "express";
import { createDestination, getDestination } from "../controllers/destinations.js";


const router = express.Router();

router.get('/',getDestination);
router.post('/',createDestination);

export default router;