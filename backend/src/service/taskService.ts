import express from "express";
import { TaskModel } from "../model/taskSchema";
import { TaskTypes } from "../typesInterface/typesInterface";

// get all task 
export const getAllTaskService = async (
    next: express.NextFunction
) => {
    try {
        const tasks = await TaskModel.find();
        return tasks;
    } catch (error) {
        next(error);
    }
};

// add a task
export const postTaskService = async (
    next: express.NextFunction,
    handleTaskData: TaskTypes
) => {
    try {
        const tasks = await new TaskModel(handleTaskData).save();
        return tasks;
    } catch (error) {
        next(error);
    }
};

// edit a task
export const patchTaskService = async (
    next: express.NextFunction,
    handleTaskData: TaskTypes
) => {
    try {
        const tasks = await TaskModel.findByIdAndUpdate(
            handleTaskData._id,
            {
                ...handleTaskData
            },
            {
                new: true
            }
        );
        return tasks;
    } catch (error) {
        next(error);
    }
};

// delete a task
export const deleteTaskService = async (
    next: express.NextFunction,
    _id: string,
) => {
    try {
        const tasks = await TaskModel.findByIdAndDelete(_id);
        return tasks;
    } catch (error) {
        next(error);
    }
};