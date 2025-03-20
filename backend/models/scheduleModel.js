import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    email: { type: String, required: true },
    title: { type: String, required: true },
    time: { type: String, required: true },
    status: { type: String, enum: ["pending", "completed"], default: "pending" }
}, { timestamps: true });

export const Schedule = mongoose.model("Schedule", scheduleSchema);
