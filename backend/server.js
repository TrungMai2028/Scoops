import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT)

app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS
app.use(helmet());
app.use(morgan('dev')); //log the requests

app.get('/test', (req, res) => {
    console.log(res.getHeaders());
    res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});