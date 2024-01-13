import express from "express";
import createTasksControllerRoute from "./taskRoute";

const route = express.Router();

export default (): express.Router => {

    createTasksControllerRoute(route);
    return route;
};