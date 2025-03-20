import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cron from "node-cron";
import { connectDB } from "./config/db.js";
import { router } from "./routes/authRoutes.js";
import { schedulerouter } from "./routes/scheduleRoutes.js";
import { deleteSchedulesAtMidnight } from "./controllers/deleteSchedulesAtMidnight.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/MediFit", router);
app.use("/api/schedules", schedulerouter);
cron.schedule("0 0 * * *", deleteSchedulesAtMidnight);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

