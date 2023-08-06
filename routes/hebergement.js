import  express   from "express";
import { getHebergement,createHebergement } from "../controllers/hebergement.js";
import auth from '../middleware/auth.js';


const router = express.Router();

router.get('/',auth,getHebergement);
router.post('/',createHebergement);

export default router;