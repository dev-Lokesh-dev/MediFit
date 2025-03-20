import express from "express";
import { createSchedule , getSchedules, updateSchedule, deleteSchedule } from "../controllers/scheduleController.js";

const schedulerouter = express.Router();

schedulerouter.post("/", createSchedule);
schedulerouter.get("/", getSchedules);
schedulerouter.put("/:scheduleId", updateSchedule);
schedulerouter.delete("/:scheduleId", deleteSchedule);

export  {schedulerouter}
