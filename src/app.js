import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors'

const app = new express();
app.use(cors(
    {
        origin: true,
        credentials: true
    }
))
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(cookieParser());

import userRouter from './routes/user.router.js';

app.use('/api/v1/user', userRouter);

export default app;