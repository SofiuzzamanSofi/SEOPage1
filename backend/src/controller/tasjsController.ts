import express from "express";
import { deleteTaskService, getAllTaskService, patchTaskService, postTaskService } from "../service/taskService";

// get all task
export const getAllTaskController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    console.log("hitted get all task.");
    try {
        const getTaskData = await getAllTaskService(next);
        if (!getTaskData) {
            return res.status(200).json({
                success: false,
                message: `Task Data not found.`,
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully got all Task.",
                data: getTaskData,
            });
        };
    } catch (error) {
        next(error);
    };
};

// add a task
export const postTaskController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const handleTaskData = req?.body;
    console.log("hitted add a task.");
    if (!handleTaskData) {
        return res.status(400).json({
            success: false,
            message: "Task Data is missing",
        });
    }
    try {
        const getTaskData = await postTaskService(next, handleTaskData);
        if (!getTaskData) {
            return res.status(200).json({
                success: false,
                message: `Task Data not found.`,
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully add a task.",
                data: getTaskData,
            });
        };
    } catch (error) {
        next(error);
    };
};

// edit a task
export const patchTaskController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const handleTaskData = req?.body;
    console.log("hitted edit a task.");
    if (!handleTaskData) {
        return res.status(400).json({
            success: false,
            message: "Task Data is missing",
        });
    }
    try {
        const getTaskData = await patchTaskService(next, handleTaskData);
        if (!getTaskData) {
            return res.status(200).json({
                success: false,
                message: `Task Data not found.`,
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully edit a task.",
                data: getTaskData,
            });
        };
    } catch (error) {
        next(error);
    };
};

// delete a task
export const deleteTaskController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const { _id } = req?.query;
    console.log("hitted delete a task.");
    if (!_id) {
        return res.status(400).json({
            success: false,
            message: "Task Data _id is missing",
        });
    }
    try {
        const getTaskData = await deleteTaskService(next, _id as string);
        if (!getTaskData) {
            return res.status(200).json({
                success: false,
                message: `Task Data not found.`,
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully delete a task.",
                data: getTaskData,
            });
        };
    } catch (error) {
        next(error);
    };
};