import axios from "axios";


const uploadImage = async (img) => {
    try {
        let myApiKey = import.meta.env.VITE_IMAGEBB_KEY
        let formData = new FormData()
        formData.append('image', img)
        const { data } = await axios.post(`${import.meta.env.VITE_IMAGEBB_URL}? 
key=${myApiKey}`, formData)
        let imageUrl = data.data.display_url
        let deleteUrl = data.data.delete_url
        return { imageUrl, deleteUrl }
    } catch (error) {
        return null
    }
};

export default uploadImage