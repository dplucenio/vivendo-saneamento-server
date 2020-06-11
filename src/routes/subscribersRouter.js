import { Router } from 'express';
import {authenticate} from '../middlewares';
import Subscriber from '../models/subscriber';

let subscriberRouter = new Router();

subscriberRouter.get('/', authenticate, async (req, res) => {
  try {
    let subscribers = await Subscriber.find({});
    return res.json(subscribers);
  } catch (err) {
    return res.json({ err });
  }
});

subscriberRouter.post('/', async (req, res) => {
  let { email } = req.body;
  try {
    let subscriber = await Subscriber.create({ email });
    return res.json(subscriber);
  } catch (err) {
    return res.json(err);
  }
});

export default subscriberRouter;