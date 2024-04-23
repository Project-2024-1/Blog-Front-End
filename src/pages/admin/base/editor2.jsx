import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const MyCKEditor = ({ data, onChange }) => {
    const [editorData, setEditorData] = useState(data || '');

    const handleEditorChange = async (event, editor) => {
        const newData = editor.getData();
        setEditorData(newData);

        // Xử lý upload ảnh lên Cloudinary
        const imageRegex = /<img[^>]+src="([^">]+)"/g;
        let match;
       

        while ((match = imageRegex.exec(data))) {
            const imageUrl = match[1];
            try {
              const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // Nếu cần thêm các header khác, bạn có thể thêm vào đây
                },
            };
                const formData = new FormData();
                formData.append('file', imageUrl);
                // formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

                const response = await axios.post('http://localhost:3000/api/image/addImage', {image: imageUrl, folderName: "CkEditor"}, 
               config
                );
                const uploadedUrl = response.data.secure_url;

                // Thay thế đường dẫn ảnh gốc bằng đường dẫn ảnh đã upload lên Cloudinary
                const replacedData = newData.replace(imageUrl, uploadedUrl);
                onChange(replacedData); 
            } catch (error) {
                console.error('Error uploading image to Cloudinary:', error);
            }
        }

        // Cập nhật data mới sau khi đã upload ảnh lên Cloudinary
        setEditorData(newData);
    };

    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={handleEditorChange}
            />
            <div>{editorData}</div>
        </div>
    );
};

export default MyCKEditor;
