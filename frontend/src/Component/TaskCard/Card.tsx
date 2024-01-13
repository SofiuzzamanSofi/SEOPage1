import { FC, useState } from 'react';
import profileImage1 from "../../assets/sofi.jpeg"
import profileImage2 from "../../assets/hunlim.png"
import profileImage3 from "../../assets/manilla.png"
import profileImage4 from "../../assets/amina.png"
import stackImage from "../../assets/stack.svg"
import clipBoardImage from "../../assets/clipboard-fill.svg"
import wechatImage from "../../assets/wechat.svg"
import paperClipImage from "../../assets/paperclip.svg"
import calenderImage from "../../assets/calender.svg"
import { TaskTypes } from '../../typesInterface/typesInterface';
import ImageModal from './ImageModal';

interface CardProps {
    task: TaskTypes;
};

const Card: FC<CardProps> = ({ task }) => {

    const [modalOpenClosed, setModalOpenClosed] = useState<boolean>(true);

    const addedPic = () => {
        console.log('pic-added:');
        console.log('task.:', task._id);

        setModalOpenClosed((prev) => !prev)
    }
    return (
        <div className='space-y-3 p-2 bg-white'>

            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                    <div>
                        <img className="w-7 h-7 rounded-full" src={profileImage1} alt="" />
                    </div>
                    <div>
                        <p className='text-xs font-semibold'>Client Name</p>
                    </div>
                </div> <div className='flex items-center gap-1'>
                    <div>
                        <img className="w-7 h-7 rounded-full" src={profileImage2} alt="" />
                    </div>
                    <div>
                        <p className='text-xs font-semibold'>Sadik Istiak</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                    <div>
                        <img className="w-5 h-5 rounded-full" src={stackImage} alt="" />
                    </div>
                    <div>
                        <p className='text-xs'>Lorem ipsum dolor sit amet curn...</p>
                    </div>
                </div>
                <div className='flex items-center rounded-sm gap-1 bg-[#dcdce0] px-1'>
                    <div>
                        <img className="w-3 h-6 rounded-full" src={clipBoardImage} alt="" />
                    </div>
                    <div>
                        <p className=' rounded-sm text-xs'>1/2</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between'>

                <div>
                    <img className="w-7 h-7 rounded-full" src={profileImage3} alt="" />
                </div>
                <div>
                    <img className="w-7 h-7 rounded-full" src={profileImage4} alt="" />
                </div>
                <div className=''>
                    <p className='bg-[#dcdce0] px-1 py-[6px] rounded-full text-xs'>12+</p>
                </div>
                <div className='flex items-center rounded-sm gap-1 px-1'>
                    <div>
                        <img className="" src={wechatImage} alt="" />
                    </div>
                    <div>
                        <p className=' rounded-sm text-xs'>15</p>
                    </div>
                </div>
                <div className='flex items-center rounded-sm gap-1 px-1'>
                    <div>
                        <img className="rotate-45 cursor-pointer" src={paperClipImage} alt="" onClick={addedPic} />
                    </div>
                    <div>
                        <p className=' rounded-sm text-xs'>25</p>
                    </div>
                </div>
                <div className='flex items-center rounded-sm gap-1 px-1'>
                    <div>
                        <img className="w-3 h-4" src={calenderImage} alt="" />
                    </div>
                    <div>
                        <p className=' rounded-sm text-xs'>30-12-2022</p>
                    </div>
                </div>
            </div>
            <ImageModal modalOpenClosed={modalOpenClosed} />
        </div>
    );
};

export default Card;