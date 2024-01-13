import express from 'express';
import { deleteTaskController, getAllTaskController, patchTaskController, patchTaskImageController, postTaskController } from '../../controller/tasjsController';

export default (router: express.Router) => {

    router.get("/all-task", getAllTaskController) // get all task
    router.post("/post-task", postTaskController) // post a task
    router.patch("/patch-task", patchTaskController) // update a task only update 
    router.patch("/patch-task/image", patchTaskImageController) // update a task only update 
    router.delete("/delete-task", deleteTaskController) // delete a task only update 
};