import { CLOUDINARY_UPLOAD_PRESET } from "@env";
import axios from 'axios';

const CLOUDINARY_API_URL = 'https://api.cloudinary.com/v1_1/htphong02/image/upload';
const CLOUDINARY_FOLDER = 'digital-literacy';

const cloudinaryApi = {
    uploadImage(image) {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('folder', CLOUDINARY_FOLDER);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        return axios.post(CLOUDINARY_API_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }
}

export default cloudinaryApi;