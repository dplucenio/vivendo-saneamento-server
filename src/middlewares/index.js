import jwt from 'jsonwebtoken';
import { promisify } from 'util';

async function authenticate(req, res, next) {
  if (!req.headers.authorization) {
    return res.json({ error: 'token not provided' });
  }
  let [, token] = req.headers.authorization.split(' ');
  try {
    let payload = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    return res.status(401).json({ error });
  }
}

export {
  authenticate
}