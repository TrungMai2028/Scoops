import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import productRoutes from './routes/productRoutes.js'; // Import your routes
import { sql } from './config/db.js'; // Import your database connection

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS
app.use(helmet());
app.use(morgan('dev')); //log the requests

app.use('/api/products', productRoutes);

async function initDB() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `; 
    console.log("Database initialized");
  } catch (error) {
    console.log("Error initDB", error);
  }
}

initDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT);
      });
});

