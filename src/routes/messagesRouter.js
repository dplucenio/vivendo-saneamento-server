import { Router } from 'express';
import Subscriber from '../models/subscriber';
import Message from '../models/message';

let messagesRouter = new Router();
messagesRouter.get('/', async (req, res) => {
  try {
    let messages = await Message.find({}, '-_id').populate('sender', 'name email -_id');
    return res.json(messages);
  } catch (error) {
    return res.json(error);
  }
})

messagesRouter.post('/', async (req, res) => {
  let { name, email, content } = req.body;
  try {
    let subscriber = await Subscriber.findOne({ email });
    if (!subscriber) {
      subscriber = await Subscriber.create({email });
    }
    let message = await Message.create({
      name,
      content,
      sender: subscriber._id
    });
    return res.json({ message });
  } catch (err) {
    return res.json({ err });
  }
});

export default messagesRouter;