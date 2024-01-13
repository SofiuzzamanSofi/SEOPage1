import mongoose from "mongoose";

// create a schema
const taskSchema = new mongoose.Schema({
    slNo: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
        enum: ["todo", "in-progress", "done"],
    },
},
    {
        timestamps: true,
    }
);

// create a model
export const TaskModel = mongoose.model("Task", taskSchema);