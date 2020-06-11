import { Schema, model } from 'mongoose';

let messageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'Subscriber',
    required: true
  }
}, {timestamps: true});

let Message = model('Message', messageSchema);

export default Message;