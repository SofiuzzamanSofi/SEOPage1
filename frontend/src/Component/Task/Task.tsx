import React, { FC, useState, useContext } from 'react';
import { TaskTypes } from '../../typesInterface/typesInterface';
import toast from 'react-hot-toast';
import { TaskContext } from '../../context/TaskProvider';
import LoadingPage from '../LoadingPage/LoadingPage';
import Card from '../TaskCard/Card';

interface TaskProps {
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    mobileMenuOpen: boolean;
}

const Task: FC<TaskProps> = () => {

    const taskInfo = useContext(TaskContext);

    const [grabElementDiv, setGrabElementDiv] = useState<HTMLDivElement | null>(null);
    const [grabElementData, setGrabElementData] = useState<TaskTypes | null>(null);

    const todoTask = taskInfo?.taskList?.filter((task) => task);
    const progressTask = taskInfo?.taskList?.filter((task) => task.state === "in-progress");
    const doneTask = taskInfo?.taskList?.filter((task) => task.state === "done");

    // drag start 
    const handleDragStart = (e: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, task: TaskTypes) => {
        // e.preventDefault();
        const selected = e.target as HTMLDivElement
        e.currentTarget.classList.add("dragged");
        setGrabElementDiv(selected);
        setGrabElementData(task);
    };

    // dragOver || draging 
    const handleDragOver = (e: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    // drop and edit the data of mongodb 
    const handleDrop = async (e: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, statusName: "todo" | "in-progress" | "done") => {
        e.preventDefault();

        e.currentTarget.appendChild(grabElementDiv!);

        if (statusName !== grabElementData?.state) {
            const newData = { ...grabElementData, state: statusName };

            //edit mongodb data
            const modifyTask = await taskInfo?.modifyTask(newData);
            if (modifyTask === true) {
                // e.currentTarget.appendChild(grabElementDiv!);
                toast.success("edit success");
            }
            else {
                toast.error("Update task failed, Try again later.");
            }
        }
        else {
            // e.currentTarget.appendChild(grabElementDiv!);
            toast.success("edit success")
        }
    };

    // drag end 
    const handleDragEnd = (e: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.classList.remove("dragged");
        setGrabElementDiv(null);
        setGrabElementData(null);
    };

    if (taskInfo?.loading) {
        return <LoadingPage />
    }

    return (
        <div className='border border-gray-500 min-h-screen '>
            <div className='border border-gray-400 p-4 m-4'>
                <div className="flex gap-4 overflow-auto">

                    <div
                        id='todo'
                        className="border min-w-[19rem] p-2 bg-[#F2F4F7]"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, "todo")}
                    >
                        <div className='flex justify-between px-2 pt-2 pb-4'>
                            <div className='flex items-center gap-1'>
                                <div className='bg-red-500 w-4 h-5 rounded-l-md'> </div>
                                <span>Incomplete</span>
                            </div>
                            <div>
                                <p className='bg-[#dcdce0] px-1 rounded-sm'>0</p>
                            </div>
                        </div>
                        <div className="space-y-4 overflow-auto max-h-[calc(100vh-8rem)]">
                            {
                                !todoTask ?
                                    ""
                                    :
                                    todoTask.map((task, index) => (
                                        <Card
                                            key={index}
                                            task={task}

                                        />
                                    ))
                            }
                        </div>
                    </div>

                    <div
                        id='todo'
                        className="border min-w-[19rem] p-2 bg-[#F2F4F7]"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, "todo")}
                    >
                        <div className='flex justify-between px-2 pt-2 pb-4'>
                            <div className='flex items-center gap-1'>
                                <div className='bg-cyan-500 w-4 h-5 rounded-l-md'> </div>
                                <span>To Do</span>
                            </div>
                            <div>
                                <p className='bg-[#dcdce0] px-1 rounded-sm'>0</p>
                            </div>
                        </div>
                        <div className="space-y-4 overflow-auto max-h-[calc(100vh-8rem)]">
                            {
                                !todoTask ?
                                    ""
                                    :
                                    todoTask.map((task, index) => (
                                        <Card
                                            key={index}
                                            task={task}

                                        />
                                    ))
                            }
                        </div>
                    </div>
                    <div
                        id='todo'
                        className="border min-w-[19rem] p-2 bg-[#F2F4F7]"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, "todo")}
                    >
                        <div className='flex justify-between px-2 pt-2 pb-4'>
                            <div className='flex items-center gap-1'>
                                <div className='bg-yellow-500 w-4 h-5 rounded-l-md'> </div>
                                <span>Doing</span>
                            </div>
                            <div>
                                <p className='bg-[#dcdce0] px-1 rounded-sm'>0</p>
                            </div>
                        </div>
                        <div className="space-y-4 overflow-auto max-h-[calc(100vh-8rem)]">
                            {
                                !todoTask ?
                                    ""
                                    :
                                    todoTask.map((task, index) => (
                                        <Card
                                            key={index}
                                            task={task}

                                        />
                                    ))
                            }
                        </div>
                    </div>
                    <div
                        id='todo'
                        className="border min-w-[19rem] p-2 bg-[#F2F4F7]"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, "todo")}
                    >
                        <div className='flex justify-between px-2 pt-2 pb-4'>
                            <div className='flex items-center gap-1'>
                                <span>Under Review</span>
                            </div>
                            <div>
                                <p className='bg-[#dcdce0] px-1 rounded-sm'>0</p>
                            </div>
                        </div>
                        <div className="space-y-4 overflow-auto max-h-[calc(100vh-8rem)]">
                            {
                                !todoTask ?
                                    ""
                                    :
                                    todoTask.map((task, index) => (
                                        <Card
                                            key={index}
                                            task={task}

                                        />
                                    ))
                            }
                        </div>
                    </div>
                    <div
                        id='todo'
                        className="border min-w-[19rem] p-2 bg-[#F2F4F7]"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, "todo")}
                    >
                        <div className='flex justify-between px-2 pt-2 pb-4'>
                            <div className='flex items-center gap-1'>
                                <span>Complete</span>
                            </div>
                            <div>
                                <p className='bg-[#dcdce0] px-1 rounded-sm'>0</p>
                            </div>
                        </div>
                        <div className="space-y-4 overflow-auto max-h-[calc(100vh-8rem)]">
                            {
                                !todoTask ?
                                    ""
                                    :
                                    todoTask.map((task, index) => (
                                        <Card
                                            key={index}
                                            task={task}

                                        />
                                    ))
                            }
                        </div>
                    </div>
                    <div
                        id='todo'
                        className="border min-w-[19rem] p-2 bg-[#F2F4F7]"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, "todo")}
                    >
                        <div className='flex justify-between px-2 pt-2 pb-4'>
                            <div className='flex items-center gap-1'>
                                <span>Over View</span>
                            </div>
                            <div>
                                <p className='bg-[#dcdce0] px-1 rounded-sm'>0</p>
                            </div>
                        </div>
                        <div className="space-y-4 overflow-auto max-h-[calc(100vh-8rem)]">
                            {
                                !todoTask ?
                                    ""
                                    :
                                    todoTask.map((task, index) => (
                                        <Card
                                            key={index}
                                            task={task}

                                        />
                                    ))
                            }
                        </div>
                    </div>
                    <div
                        id='todo'
                        className="border min-w-[19rem] p-2 bg-[#F2F4F7]"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, "todo")}
                    >
                        <div className='flex justify-between px-2 pt-2 pb-4'>
                            <div className='flex items-center gap-1'>
                                <span>Over View</span>
                            </div>
                            <div>
                                <p className='bg-[#dcdce0] px-1 rounded-sm'>0</p>
                            </div>
                        </div>
                        <div className="space-y-4 overflow-auto max-h-[calc(100vh-8rem)]">
                            {
                                !todoTask ?
                                    ""
                                    :
                                    todoTask.map((task, index) => (
                                        <Card
                                            key={index}
                                            task={task}

                                        />
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;