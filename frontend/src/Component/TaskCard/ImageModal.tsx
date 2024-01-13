import axios from 'axios';
import { FC, useState } from 'react';
import { ImagesTypes } from '../../typesInterface/typesInterface';
import { taskAuth } from '../../context/TaskProvider';

interface ImageModalProps {
    setModalOpenClosed: React.Dispatch<React.SetStateAction<boolean>>;
    _id: string;
    images: ImagesTypes[] | undefined
};

const ImageModal: FC<ImageModalProps> = ({ setModalOpenClosed, _id, images }) => {

    const { setReloadData } = taskAuth()

    const [loading, setLoading] = useState<boolean>(false);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files?.length) {
            const imageData = new FormData();
            imageData.set("key", import.meta.env.VITE_IMAGEBB_KEY);
            if (files?.length > 5) {
                return window.alert("File select Limit only five")
            }

            setLoading(true);
            // Create an array to store promises
            const uploadPromises: Promise<{ name: string; url: string | null }>[] = [];

            for (let i = 0; i < files.length; i++) {
                imageData.append("image", files[i]);

                // Create a promise for each image upload
                const uploadPromise = axios.post("https://api.imgbb.com/1/upload", imageData)
                    .then(response => {
                        const imageUrl = response?.data?.data?.display_url;
                        return { name: files[i].name, url: imageUrl };
                    })
                    .catch(error => {
                        console.error(`Error uploading ${files[i].name}:`, error);
                        return { name: files[i].name, url: null };
                    });

                uploadPromises.push(uploadPromise);
            }

            // Wait for all promises to resolve
            try {
                const allUrlWithName = await Promise.all(uploadPromises);

                const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/patch-task/image`, { _id, allUrlWithName });
                if (response.data.success) {
                    setReloadData((prev) => !prev);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error('Error uploading files:', error);
            }
        }
    };

    return (
        <div className={`min-h-screen w-full bg-[#F2F4F7] absolute  top-[-10px]  left-0 right-0 flex justify-center items-center z-10`}
            onClick={(e) => {
                if (e.target !== e.currentTarget) {
                    return
                };
                setModalOpenClosed((prev) => !prev);
            }}
        >
            <div className='min-w-[20rem] max-w-[40rem] bg-white p-4 space-y-4 overflow-auto' >
                <div className="">
                    {
                        loading ?
                            <div className="border mt-4 p-4 text-center text-gray-700 bg-white border-dashed border-gray-300 transition duration-300 font-semibold text-lg py-12">
                                <p>Loading...</p>
                            </div>
                            :
                            <>
                                <input
                                    style={{ zIndex: 999, opacity: 0, width: '320px', height: '200px', position: 'absolute', right: '0px', left: '0px', marginRight: 'auto', marginLeft: 'auto' }}
                                    name="files[]"
                                    id="filer_input2"
                                    multiple
                                    type="file"
                                    accept="image/*,.pdf" // Specify accepted file types
                                    className='cursor-pointer'
                                    onChange={(event) => handleFileChange(event)}
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
                            </>
                    }
                </div>
                {
                    images?.length == 0 ?
                        <div>
                            No image Found.
                        </div>
                        :
                        <div>
                            <div>
                                <p className='font-semibold'> File Name</p>
                            </div>
                            <div className='space-y-4 '>
                                {
                                    images?.map((image) => (
                                        <div key={image._id} className='flex justify-between'>

                                            <div>

                                                <p>{image.name}</p>
                                            </div>

                                            <a href={image.url!} target="_blank" title='click to open'>
                                                <img className="w-24 h-24" src={image.url} alt="" />

                                            </a>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default ImageModal;