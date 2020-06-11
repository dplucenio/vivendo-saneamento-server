import { Schema, model } from 'mongoose';

let subscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  isSubscribed: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

export default model('Subscriber', subscriberSchema);