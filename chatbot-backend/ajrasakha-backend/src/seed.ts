import mongoose = require("mongoose");
import dotenv = require('dotenv');
dotenv.config();
import connectDB = require('./db');
import QAModel from './models/qa.model';

const seedData = async () => {
    try {
        await connectDB();
        console.log("Connected to MongoDB for seeding data...");
     await QAModel.insertMany([
            {
                question: "wheat irrigation timing",
                answer: "Irrigate wheat after 20-25 days",
                source: "Golden",
            },
            {
                question: "rice fertilizer use",
                answer: "Use nitrogen fertilizer",
                source: "PoP",
            },
            {
                question: "how to grow tomato",
                answer: "Use well-drained soil and sunlight",
                source: "Golden",
            },
        ]);

    console.log("Data Inserted ✅");
    process.exit();

  } catch (error) {
    console.error(error);
  }
};
seedData();