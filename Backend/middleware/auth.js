import jwt from 'jsonwebtoken';

const verifyUser = (req, res, next) => {
    const headers = req.headers;
    const token = headers.authorization.split(' ')[1]
    try {
        const jwtDecode = jwt.decode(token);
        console.log(jwtDecode);
        req.uname = jwtDecode.uname;
        next()
    }catch(err){
        throw new Error('Unauthorised User');
        
    }
}

export default verifyUser;