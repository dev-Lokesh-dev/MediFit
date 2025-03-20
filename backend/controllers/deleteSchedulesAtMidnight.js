const deleteSchedulesAtMidnight = async () => {
    try {
        const result = await Schedule.deleteMany({});
        console.log(`Deleted ${result.deletedCount} schedules at midnight`);

        console.log("Cron job scheduled: Deletes all schedules at midnight.");
    } catch (error) {
        console.error("Error deleting schedules:", error);
    }
};

export { deleteSchedulesAtMidnight }