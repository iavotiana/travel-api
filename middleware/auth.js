import jwt from 'jsonwebtoken';

const auth = async (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const isCustomAuth = token?.length < 500;

        let decodedData;
        if(token){
            decodedData = jwt.verify(token, 'test');
            req.userId = decodedData?.id;
            // Afficher le token reçu dans la console du serveur
            console.log("Token reçu :", token);
        } else {
            return res.status(401).json({ message: 'Vous deviez vous identifiez' });
        }
        next();

    } catch (error) {
        console.log(error);
    }
}

export default auth;