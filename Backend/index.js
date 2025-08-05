const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./src/config/db")


const app = express();
const PORT = 5000;

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running!')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})