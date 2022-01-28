import bodyParser from 'body-parser';
import cors from 'cors';
import Express from 'express';
import baseRouter from './routes/index.js';

const port = process.env.PORT || 5000;
const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', baseRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port} `)
});
