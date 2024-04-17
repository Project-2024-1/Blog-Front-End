import { useEffect, useState } from "react";
import axios from "axios";

const ImageBase = ({ name, data, dataName, onImageUrlChange }) => {
    const [imageUrl, setImageUrl] = useState(data);
    const [newImageUrl, setNewImageUrl] = useState('');

    useEffect(() => {
        if (newImageUrl !== '') { // Kiểm tra newImageUrl đã được thiết lập chưa
            setImageUrl(newImageUrl);
            onImageUrlChange(newImageUrl);
        } else if (data !== imageUrl) { // Kiểm tra data mới và imageUrl có khác nhau không
            setImageUrl(data);
        }
    }, [newImageUrl, data]); // Đặt các dependency cần thiết cho useEffect

    const handleChange = async (e) => {
        const file = e.target.files[0];
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                // Nếu cần thêm các header khác, bạn có thể thêm vào đây
            },
        };
        try {
            const response = await axios.post('http://localhost:3000/api/image/addImage', {image: file, folderName: "users"}, 
            config
        );
            console.log(response)
            const imageUrl = response.data.url;
            setNewImageUrl(imageUrl);

            onImageUrlChange(imageUrl);
        } catch(error) {
            console.error('Error uploading image:', error);
        }
    }


const handleDeleteImage = async (e) => {
    try {
        let imageName = 
        const response = await axios.delete(`http://localhost:3000/api/image/deleteImage/${data}`);
        console.log(response)
    } catch(error) {
        console.error('Error deleting image:', error);
    }
}

    return (
        <div className='flex gap-2 items-center'>
            <label className='w-[200px]' htmlFor="name">{name}</label>
            <div>
                <img className='w-[200px]' src={imageUrl} alt="" />
            </div>
            <input 
                type="file" 
                name={dataName}
                placeholder='Enter your avatar'
                onChange={handleChange}
            />
            <div className="cursor-pointer" onClick={handleDeleteImage}>Xóa hình ảnh hiện tại</div>
        </div>
    );
};

export default ImageBase;
