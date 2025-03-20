import { Schedule } from "../models/scheduleModel.js";

export const createSchedule = async (req, res) => {
    try {
        console.log('ajfnja');
        
        const { email, title, time, status } = req.body;
        if (!email || !title || !time) return res.status(400).json({ message: "Missing required fields" });
        
        const schedule = await Schedule.create({ email, title, time, status });
        res.status(201).json({ message: "Schedule created", schedule });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getSchedules = async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) return res.status(400).json({ message: "Email is required" });
        
        const schedules = await Schedule.find({ email });
        res.json(schedules);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const updateSchedule = async (req, res) => {
    try {
        const { scheduleId } = req.params;
        const { email } = req.body;
        
        if (!email) return res.status(400).json({ message: "Email is required" });

        const schedule = await Schedule.findOne({ _id: scheduleId, email });
        if (!schedule) return res.status(404).json({ message: "Schedule not found" });

        schedule.status = "completed";  
        await schedule.save();

        res.json({ message: "Schedule marked as completed", schedule });
    } catch (error) {
        
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


export const deleteSchedule = async (req, res) => {
    try {
        const { scheduleId } = req.params;
        const { email } = req.body;
        if (!email) return res.status(400).json({ message: "Email is required" });

        const schedule = await Schedule.findOneAndDelete({ _id: scheduleId, email });
        if (!schedule) return res.status(404).json({ message: "Schedule not found" });
        
        res.json({ message: "Schedule deleted" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
