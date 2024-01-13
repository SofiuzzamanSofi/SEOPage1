import axios from 'axios';
import { FC, createContext, useEffect, useState, ReactNode } from 'react';
import { EditTaskTypes, TaskInfoTypes, TaskTypes } from '../typesInterface/typesInterface';

interface TaskProviderProps {
    children: ReactNode
}

export const TaskContext = createContext<TaskInfoTypes | undefined>(undefined);

export const TaskProvider: FC<TaskProviderProps> = ({ children }) => {
    const [taskList, setTaskList] = useState<TaskTypes[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [reloadData, setReloadData] = useState<boolean>(true);

    // modify task function
    const modifyTask = async (data: EditTaskTypes): Promise<boolean> => {
        try {
            const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/patch-task`, data);
            if (response.data?.success) {
                setReloadData(!reloadData);
                setLoading(true);
                return true;
            }
            else {
                return false
            }
        } catch (error) {
            // console.log('error-on-task-modify:', error);
            return false;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/all-task`);
                setTaskList(response.data.data);
                setLoading(false);
            } catch (error) {
                // Handle error
                setLoading(false);
            }
        };
        fetchData();
    }, [reloadData]);

    const taskInfo: TaskInfoTypes = { taskList, loading, modifyTask, setReloadData };

    return (
        <TaskContext.Provider value={taskInfo}>
            {children}
        </TaskContext.Provider>
    );
};