import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';    

config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH' ],
    allowedHeaders: ['Content-Type', 'Authorization']
})); 


app.get('/api/get-message', (req, res) => {
    res.json({ message: 'Server is up and running!' });
});



app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});