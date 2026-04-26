import { DB_NAME } from '../constant';
import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.mongodb_uri;
        if (!mongoUri) {
            throw new Error('MongoDB URI not found. Set MONGO_URI, MONGODB_URI, or mongodb_uri in your .env file.');
        }

        await mongoose.connect(mongoUri, {
            dbName: DB_NAME,
            serverSelectionTimeoutMS: 5000, 
            // Optional: Set a timeout for server selection


        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }       
};

export = connectDB;