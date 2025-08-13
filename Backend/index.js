const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./src/config/db.js")
const categoryrouter = require("./src/Route/CategoryRoute.js")
const warehouserouter = require("./src/Route/WarehouseRoutes.js")


const app = express();
const PORT = 5245;

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/category", categoryrouter);
app.use("/api/warehouse", warehouserouter);

app.get('/', (req, res) => {
    res.send('Backend is running!')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})