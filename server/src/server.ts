import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 9000;

const app = express();

app.get("/", (req: any, res: any) => {
    try {
        res.status(200).json({message:"Hello World!"});
    } catch (error: any) {
        res.status(400).json(error);
    }
})

app.listen(PORT, () => {
    console.log(`Tradez Backend has Started and running on PORT : ${PORT}`)
})