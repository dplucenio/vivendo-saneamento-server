import express from 'express';
import mongoose from 'mongoose';
import router from './routes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  return res.json({ msg: `I'm alive` });
});

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => {    
    app.listen(process.env.PORT, () =>
      console.log(`Vivendo Saneamento is live in port ${process.env.PORT}`)
    );
  })
  .catch(err => console.log(err));
