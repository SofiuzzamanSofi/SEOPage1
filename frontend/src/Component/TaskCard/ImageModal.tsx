import axios from 'axios';
import { ChangeEvent, FC, useState } from 'react';

interface ImageModalProps {
    modalOpenClosed: boolean
};

const ImageModal: FC<ImageModalProps> = ({ modalOpenClosed }) => {

    const [loading, setLoading] = useState<boolean>(false);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        console.log('files:', files);


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
                setLoading(false);
                console.log('All uploads completed.', allUrlWithName);
            } catch (error) {
                setLoading(false);
                console.error('Error uploading files:', error);
            }
        }
    };


    console.log('selectedImages:',);

    return (
        <div className={`${modalOpenClosed ? "hidden" : ""} min-h-screen w-full bg-[#eeeeee] absolute  top-[-10px] bottom-[-10px] left-0 right-0 flex justify-center items-center z-10`}>
            <div className='min-w-[20rem] max-w-[40rem] bg-white p-4' >
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