import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NameBase from "../base/nameBase";
import StatusButton from '../base/statusButton';
import { getService } from '../../../lib/api';
import ImageBase from '../base/imageBase';
import axios from 'axios';
import Category from './category';
import MyEditor from '../base/myEditor';
import MyCKEditor from '../base/editor2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const CreateAndUpdateCategory = ({ onContentChange, contentOld }) => {

    const cloudName = 'dpnlgxwkp';

    const location = useLocation();
    const [category, setCategory] = useState({
        id: '',
        cate_name: '',
        cate_description : '',
        cate_image: '',
    });
    const [content, setContent] = useState('');
    const [imageUrlFromChild, setImageUrlFromChild] = useState('');

    const queryParams = new URLSearchParams(location.search);
    let paramValue = queryParams.get('idPost');
     // Hàm callback để nhận imageUrl từ ImageBase
     const handleImageUrlChange = (imageUrl) => {
        setCategory({ ...category, cate_image: imageUrl });
        setImageUrlFromChild(imageUrl);
    };
    // sự kiện onchange của input 
    const handleChange = (e) => {
            const { name, value } = e.target;
            setCategory({ ...category, [name]: value });
        };

  
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (paramValue) {
                    const categoryData = await getService(`http://localhost:33655/v1/api/category?`, `idCategory=${paramValue}`);
                    console.log(categoryData.metadata[0])
                    setCategory(categoryData.metadata[0]);
    
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
    
        fetchData(); // Gọi fetchData nếu paramValue có giá trị
    }, []); // Không có dependency để đảm bảo useEffect chạy mỗi khi component được render
    

    const config = {
        headers: {
            'Content-Type': 'application/json',
            // Nếu cần thêm các header khác, bạn có thể thêm vào đây
        },
    };
    // API thêm mới User hoặc sửa User
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(paramValue)
            if(paramValue === "" || paramValue === null) {
                console.log(category)
                const response = await axios.post('http://localhost:33655/v1/api/category', category, config);
                console.log(response)
            } else {
                setCategory({... category, id: paramValue});
                console.log(category)
                const response = await axios.put('http://localhost:33655/v1/api/category', category, config);
                console.log(response)
                 
            }
            // console.log('Data added:', response.data);
            // Thêm logic xử lý sau khi thêm dữ liệu thành công
        } catch (error) {
            console.log(error)
            console.error('Error adding data:', error);
        }
    };

    // const handleEditorContentChange = (newContent) => {
    //     // Cập nhật trạng thái formData nếu cần:
    //     setCategory({
    //         ...posts,
    //         PostContent: newContent,
    //       });
    //   };

    // useEffect(() => {
    //   setContent(contentOld);
    // }, [contentOld]);
  
    // const handleEditorChange = (event, editor) => {
    //   const newContent = editor.getData();
    //   setContent(newContent);
    //   onContentChange(newContent); // Truyền giá trị lên cho cha
    // };
  
    return <div>
        <NameBase name={paramValue === null || paramValue === "" ? "Create User" : "Update User"}/>
        <form className='flex gap-2 flex-col' onSubmit={handleSubmit}>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Tên bài Danh mục</label>
                <input
                 className='w-[600px] p-3 border-none outline-none' 
                 type="text" 
                 name='cate_name'
                 placeholder='Enter your PostTitle' 
                 value={category.cate_name || ""}
                 onChange={handleChange}
                />
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Mô tả</label>
                <textarea 
                    className='w-[600px] p-3 border-none outline-none'
                    name='cate_description'
                    type="text" 
                    value={category.cate_description || ""}
                    onChange={handleChange}
                    // readOnly={paramValue !== null && paramValue !== ""}
                />
            </div>
            {/* <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Tác giả</label>
                <input 
                    className='w-[600px] p-3 border-none outline-none' 
                    type="text" 
                    name='PostAuthor'
                    placeholder='Enter your email' 
                    value={posts.PostAuthor || ""}
                    onChange={handleChange}
                />
            </div> */}
            <ImageBase name="Avatar" data={category.cate_image} dataName="cate_image" onImageUrlChange={handleImageUrlChange} folderImage={"Category"}/>
            {/* <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Content</label>
                <MyEditor onContentChange={(newContent) => handleEditorContentChange(newContent)} contentOld={posts.PostContent}/> 
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Trạng thái</label>
                <StatusButton status={`${posts.PostStatus} || ""`}/>
            </div> */}
            {/* <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Link</label>
                <input 
                    className='w-[600px] p-3 border-none outline-none' 
                    type="text" 
                    name='PostLink'
                    placeholder='Enter your email' 
                    value={posts.PostLink || ""}
                    onChange={handleChange}
                />
            </div> */}
            {/* <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">PostMetaTitle</label>
                <input 
                    className='w-[600px] p-3 border-none outline-none' 
                    type="text" 
                    name='PostMetaTitle'
                    placeholder='Enter your email' 
                    value={posts.PostMetaTitle || ""}
                    onChange={handleChange}
                />
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">PostMetaDescription</label>
                <input 
                    className='w-[600px] p-3 border-none outline-none' 
                    type="text" 
                    name='PostMetaDescription'
                    placeholder='Enter your email' 
                    value={posts.PostMetaDescription || ""}
                    onChange={handleChange}
                />
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">PostTag</label>
                <input 
                    className='w-[600px] p-3 border-none outline-none' 
                    type="text" 
                    name='PostTag'
                    placeholder='Enter your email' 
                    value={posts.PostTag || ""}
                    onChange={handleChange}
                />
            </div> */}
            {/* <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">PostSortOrder</label>
                <input 
                    className='w-[600px] p-3 border-none outline-none' 
                    type="number" 
                    name='PostSortOrder'
                    placeholder='Enter your email' 
                    value={posts.PostSortOrder || ""}
                    onChange={handleChange}
                />
            </div> */}
            {/* <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">PostTotalView</label>
                <input 
                    className='w-[600px] p-3 border-none outline-none' 
                    type="text" 
                    name='PostTotalView'
                    placeholder='Enter your email' 
                    value={posts.PostTotalView || ""}
                    onChange={handleChange}
                    readOnly
                />
            </div> */}
            <button type='submit' className='bg-Txanh text-Twhite p-3 rounded-3xl'>
                {paramValue === null || paramValue === "" ? "Create" : "Update"}
            </button>
        </form>
    </div>;
  };
  
  export default CreateAndUpdateCategory;