import { Router } from 'express';
import { promisify } from 'util';
import { sign } from 'jsonwebtoken';

const sessionsRouter = new Router();
sessionsRouter.post('/', async (req, res) => {
  let { password } = req.body;
  if (password === process.env.PASSWORD) {
    try {
      let token = await promisify(sign)('signed', process.env.JWT_SECRET);
      return res.json({
        token
      });
    } catch (err) {
      return res.status(500).json({err});
    }
  } else {
    return res.status(400).json({ msg: 'password incorrect' });
  }
});

export default sessionsRouter;