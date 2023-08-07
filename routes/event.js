import  express   from "express";
import { createEvent, getEvent } from "../controllers/event.js";


const router = express.Router();

router.get('/',getEvent);
router.post('/',createEvent);

export default router;