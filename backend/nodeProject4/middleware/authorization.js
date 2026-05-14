import jwt from 'jsonwebtoken';

const authorization = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
   

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        console.log('Decoded token:', decoded); // Debug log to check the decoded token

        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });    
    }
};

export default authorization;