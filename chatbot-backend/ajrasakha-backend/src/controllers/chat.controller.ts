import mongoose from "mongoose";


import {Request, Response} from 'express';
import QAModel from '../models/qa.model';

interface QA{
    question: string;
    answer: string;
    source: string;
}

export const askQuestion = async (req: Request, res: Response) => {
    try{
        console.log("Received question:", req.body.question);
        const { question } = req.body;
        if (!question) {
            return res.status(400).json({ error: 'Question is required' });
        }

        const result : QA[]=await QAModel.find({
            question: { $regex: question, $options: 'i' } // Case-insensitive search
        });
        console.log("Result from DB:", result);
        const firstMatch = result[0];
        if(firstMatch){
            return res.json({   
                result: firstMatch.answer,
                source: firstMatch.source
            })
        } 
        
        return res.json({ result: "Sorry, I don't have an answer for that question." });
        
    } catch (error) {
        console.log("Error in askQuestion:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}