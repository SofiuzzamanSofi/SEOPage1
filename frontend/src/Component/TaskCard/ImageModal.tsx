import axios from 'axios';
import { ChangeEvent, FC } from 'react';

interface ImageModalProps {
    modalOpenClosed: boolean
};

const ImageModal: FC<ImageModalProps> = ({ modalOpenClosed }) => {

    const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        // const file = event.target.files?.[0];

        if (files?.length) {
            const imageData = new FormData();
            imageData.set("key", import.meta.env.VITE_IMAGEBB_KEY);

            for (let i = 0; i < files.length; i++) {
                imageData.append(`image${i}`, files[i]);
            }

            try {
                const response = await axios.post(import.meta.env.VITE_IMAGEBB_URL, imageData);
                const imageUrls = response?.data?.data;
                console.log('Image URLs:', imageUrls);
            } catch (error) {
                console.error('Image upload failed:', error);
                // Handle the error appropriately
            }
        }
    };

    return (
        <div className={`${modalOpenClosed ? "hidden" : ""} min-h-screen w-full bg-[#eeeeee] absolute  top-[-10px] bottom-[-10px] left-0 right-0 flex justify-center items-center z-10`}>
            <div className='min-w-[20rem] max-w-[40rem] bg-white p-4' >
                <div className="">
                    <input
                        style={{ zIndex: 999, opacity: 0, width: '320px', height: '200px', position: 'absolute', right: '0px', left: '0px', marginRight: 'auto', marginLeft: 'auto' }}
                        name="files[]"
                        id="filer_input2"
                        multiple
                        type="file"
                        className='cursor-pointer'
                        onChange={(event) => handleImageChange(event)}
                    />
                    <div className="border mt-4 p-4 text-center text-gray-700 bg-white border-dashed border-gray-300 transition duration-300">
                        <div className="">
                            <div className="text-4xl mt-2">
                                <i className="fa fa-file-image-o"></i>
                            </div>
                            <div className="">
                                <h3 className="text-lg mb-0">Drag &amp; Drop files here</h3>
                                <span className="inline-block mt-2 text-sm">or</span>
                            </div>
                            <a className="blue inline-block px-4 py-2 text-xs font-bold text-white border border-blue-500 rounded-md bg-blue-500 hover:bg-blue-600 transition duration-200">Browse Files</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p> File Name</p>
                    </div>
                    <div>
                        <p>Name.pnj</p>
                        <p>Name.pnj</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageModal;