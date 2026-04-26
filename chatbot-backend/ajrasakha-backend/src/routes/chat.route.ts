import mongoose from "mongoose";

import {Request, Response} from 'express';
import QAModel = require('../models/qa.model');
import { askQuestion } from "../controllers/chat.controller";

const router = require('express').Router();

router.post('/ask', askQuestion);

export default router;