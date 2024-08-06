import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NameBase from "../base/nameBase";
import StatusButton from '../base/statusButton';
import { getService } from '../../../lib/api';
import ImageBase from '../base/imageBase';
import axios from 'axios';
import Posts from './Posts';
import MyEditor from '../base/myEditor';
import MyCKEditor from '../base/editor2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const CreateAndUpdatePost = ({ onContentChange, contentOld }) => {

    const cloudName = 'dpnlgxwkp';

    const location = useLocation();
    const [posts, setPosts] = useState({
        id: '',
        PostTitle: '',
        PostDescription: '',
        PostImage: '',
        PostTag: '',
        PostContent: '',
        PostStatus: '',
        PostSortOrder: '',
        PostTotalView: '',
        categories: []
    });
    const [content, setContent] = useState('');
    const [imageUrlFromChild, setImageUrlFromChild] = useState('');
    const [categoryOptions, setCategoryOptions] = useState([]); // Danh sách danh mục từ API
    const [selectedCategories, setSelectedCategories] = useState([]); // Các danh mục được chọn từ checkbox

    const queryParams = new URLSearchParams(location.search);
    let paramValue = queryParams.get('idPost');
     // Hàm callback để nhận imageUrl từ ImageBase
     const handleImageUrlChange = (imageUrl) => {
        setPosts({ ...posts, PostImage: imageUrl });
        setImageUrlFromChild(imageUrl);
    };
    // sự kiện onchange của input 
    const handleChange = (e) => {
            const { name, value } = e.target;
            setPosts({ ...posts, [name]: value });
        };


        const handleCheckboxChange = (categoryId) => {
            setSelectedCategories(prevSelected => {
                const updatedSelected = prevSelected.includes(categoryId)
                    ? prevSelected.filter(id => id !== categoryId)
                    : [...prevSelected, categoryId];
                // Cập nhật danh mục đã chọn trong trạng thái bài viết
                setPosts(prevPosts => ({
                    ...prevPosts,
                    categories: updatedSelected
                }));

                console.log(updatedSelected)
                return updatedSelected;
            });
        };
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (paramValue) {
                    const postData = await getService(`http://localhost:33655/v1/api/post?`, `idPost=${paramValue}`);
                    console.log('post by ID',postData)
                    setPosts(postData.metadata[0]);
                    setSelectedCategories(postData.metadata.categories || []);
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

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getService("http://localhost:33655/v1/api/category", "");
                console.log(response)
                setCategoryOptions(response.metadata); // Set category options
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    // API thêm mới User hoặc sửa User
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(paramValue)
            if(paramValue === "" || paramValue === null) {
                console.log(posts)
                const response = await axios.post('http://localhost:33655/v1/api/post', posts, config);
                console.log(response)
            } else {
                setPosts({... posts, id: paramValue});
                
                const response = await axios.put('http://localhost:33655/v1/api/post', posts, config);
                console.log(response)
                 console.log(posts)
            }
            // console.log('Data added:', response.data);
            // Thêm logic xử lý sau khi thêm dữ liệu thành công
        } catch (error) {
            console.log(error)
            console.error('Error adding data:', error);
        }
    };

    const handleEditorContentChange = (newContent) => {
        // Cập nhật trạng thái formData nếu cần:
        setPosts({
            ...posts,
            PostContent: newContent,
          });
      };

    useEffect(() => {
      setContent(contentOld);
    }, [contentOld]);
  
    const handleEditorChange = (event, editor) => {
      const newContent = editor.getData();
      setContent(newContent);
      onContentChange(newContent); // Truyền giá trị lên cho cha
    };
  
    return <div>

        <NameBase name={paramValue === null || paramValue === "" ? "Create User" : "Update User"}/>
        <div className='flex gap-2 flex-col'>
                    <label className='w-[200px]' htmlFor="categories">Categories</label>
                    {categoryOptions.map(category => (
                        <div key={category._id}>
                            <input
                                type="checkbox"
                                id={`category-${category._id}`}
                                name='categories'
                                value={category._id}
                                checked={selectedCategories.includes(category._id)}
                                onChange={() => handleCheckboxChange(category._id)}
                            />
                            <label htmlFor={`category-${category._id}`}>{category.cate_name}</label>
                        </div>
                    ))}
                </div>
        <form className='flex gap-2 flex-col' onSubmit={handleSubmit}>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Tên bài viết</label>
                <input
                 className='w-[600px] p-3 border-none outline-none' 
                 type="text" 
                 name='PostTitle'
                 placeholder='Enter your PostTitle' 
                 value={posts.PostTitle || ""}
                 onChange={handleChange}
                />
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Mô tả</label>
                <textarea 
                    className='w-[600px] p-3 border-none outline-none'
                    name='PostDescription'
                    type="text" 
                    value={posts.PostDescription || ""}
                    onChange={handleChange}
                    // readOnly={paramValue !== null && paramValue !== ""}
                />
            </div>
            <ImageBase name="Avatar" data={posts.PostImage} dataName="PostImage" onImageUrlChange={handleImageUrlChange} folderImage={"posts"}/>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Content</label>
                <MyEditor onContentChange={(newContent) => handleEditorContentChange(newContent)} contentOld={posts.PostContent}/> 
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Trạng thái</label>
                <StatusButton status={`${posts.PostStatus} || ""`}/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">PostSortOrder</label>
                <input 
                    className='w-[600px] p-3 border-none outline-none' 
                    type="number" 
                    name='PostSortOrder'
                    placeholder='Enter your email' 
                    value={posts.PostSortOrder || ""}
                    onChange={handleChange}
                />
            </div>
            <div className='flex gap-2 items-center'>
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
            </div>
            <button type='submit' className='bg-Txanh text-Twhite p-3 rounded-3xl'>
                {paramValue === null || paramValue === "" ? "Create" : "Update"}
            </button>
        </form>
    </div>;
  };
  
  export default CreateAndUpdatePost;