import  express   from "express";
import { getHebergement,createHebergement } from "../controllers/hebergement.js";


const router = express.Router();

router.get('/',getHebergement);
router.post('/',createHebergement);

export default router;