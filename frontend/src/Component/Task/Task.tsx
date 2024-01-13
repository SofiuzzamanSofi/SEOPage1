import React, { FC, useContext } from 'react';
import { TaskContext } from '../../context/TaskProvider';
import LoadingPage from '../LoadingPage/LoadingPage';
import Card from '../TaskCard/Card';

interface TaskProps {
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    mobileMenuOpen: boolean;
}

const Task: FC<TaskProps> = () => {

    const taskInfo = useContext(TaskContext);

    const todoTask = taskInfo?.taskList?.filter((task) => task);


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