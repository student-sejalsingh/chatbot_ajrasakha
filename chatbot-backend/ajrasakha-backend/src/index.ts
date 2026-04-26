import express = require('express');
import cors from 'cors';
import connectDB = require('./db');
import dotenv = require('dotenv');
import chatRoutes from './routes/chat.route';
import nodeHttp2 = require('node:http2');// Importing the http2 module from Node.js for potential use in the application

dotenv.config();

const app = express();
const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:3000')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

app.use(cors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
            return;
        }
        callback(new Error('Not allowed by CORS'));
    },
}));
app.use(express.json());
app.use('/api/chat', chatRoutes);
const PORT = process.env.PORT || 5000;



app.get('/', (req, res) => {    
    res.send('Hello from Ajrasakha Backend!');
});

connectDB()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Exit process with failure
    });

 
