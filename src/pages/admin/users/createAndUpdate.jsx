import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NameBase from "../base/nameBase";
import StatusButton from '../base/statusButton';
import { getService } from '../../../lib/api';
import ImageBase from '../base/imageBase';
import axios from 'axios';


const CreateAndUpdateUser = () => {
    const location = useLocation();
    const [users, setUsers] = useState({
        id: '',
        UserName: '',
        UserPassword: '',
        UserEmail: '',
        UserDescription: '',
        UserAvatar: '',
        UserRole: [],
        UserStatus: 1,

    });
    const [permission, setPermission] = useState([]);
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    const [imageUrlFromChild, setImageUrlFromChild] = useState('');

    const queryParams = new URLSearchParams(location.search);
    let paramValue = queryParams.get('idUser');
     // Hàm callback để nhận imageUrl từ ImageBase
     const handleImageUrlChange = (imageUrl) => {
        setUsers({ ...users, UserAvatar: imageUrl });
        setImageUrlFromChild(imageUrl);
    };
    // sự kiện onchange của input 
    const handleChange = (e) => {
            const { name, value } = e.target;
            setUsers({ ...users, [name]: value });
        };

        // effect gọi api lấy dữ liệu Role và User
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             if(paramValue){
    //                 const [userData, roleData] = await Promise.all([
    //                     getService(`http://localhost:3000/api/user?`, `idUser=${paramValue}`),
    //                     getService(`http://localhost:3000/api/role`, ``)
    //                 ]);
    
    //                 setUsers(userData.users);
    //                 setPermission(roleData.roles);
    
    //                 if (userData && userData.users && userData.users.UserRole) {
    //                     const selectedIds = userData.users.UserRole.map(role => role);
    //                     setSelectedPermissions(selectedIds);
    //                 }
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [location, paramValue]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (paramValue) {
                    const userData = await getService(`http://localhost:3000/api/user?`, `idUser=${paramValue}`);
                    setUsers(userData.users);
    
                    if (userData && userData.users && userData.users.UserRole) {
                        const selectedIds = userData.users.UserRole.map(role => role);
                        setSelectedPermissions(selectedIds);
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        const fetchRoleData = async () => {
            try {
                const roleData = await getService(`http://localhost:3000/api/role`, ``);
                setPermission(roleData.roles);
            } catch (error) {
                console.error('Error fetching role data:', error);
            }
        };
    
        fetchData(); // Gọi fetchData nếu paramValue có giá trị
        fetchRoleData(); // Luôn gọi fetchRoleData để lấy dữ liệu role
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
                const response = await axios.post('http://localhost:3000/api/user/addUser', users, config);
                // console.log(response)
            } else {
                setUsers({... users, id: paramValue});
                const response = await axios.patch('http://localhost:3000/api/user/updateUser', users, config);
                // console.log(response)
            }
            // console.log('Data added:', response.data);
            // Thêm logic xử lý sau khi thêm dữ liệu thành công
        } catch (error) {
            console.log(error)
            console.error('Error adding data:', error);
        }
    };

    // hàm kiểm tra quyền của user với danh sách role
    const handlePermissionChange = (roleId) => {
        let updatedPermissions = [...selectedPermissions];
        if (updatedPermissions.includes(roleId)) {
            updatedPermissions = updatedPermissions.filter(id => id !== roleId);
        } else {
            updatedPermissions.push(roleId);
        }
        setSelectedPermissions(updatedPermissions);

        // lấy danh sách quyền ban đầu
        let userRoleOld = [... users.UserRole];
        if (userRoleOld.includes(roleId)) {
            userRoleOld = userRoleOld.filter(id => id !== roleId);
        } else {
            userRoleOld.push(roleId);
        }
        setUsers({ ...users, UserRole: userRoleOld });
    };

    return <div>
        <NameBase name={paramValue === null || paramValue === "" ? "Create User" : "Update User"}/>
        <form className='flex gap-2 flex-col' onSubmit={handleSubmit}>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Tên người dùng</label>
                <input
                 className='w-[600px] p-3 border-none outline-none' 
                 type="text" 
                 name='UserName'
                 placeholder='Enter your name' 
                 value={users.UserName || ""}
                 onChange={handleChange}
                />
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Mật khẩu</label>
                <input 
                    className='w-[600px] p-3 border-none outline-none'
                    name='UserPassword'
                    type="password" 
                    value={users.UserPassword || ""}
                    onChange={handleChange}
                    readOnly={paramValue !== null && paramValue !== ""}
                />
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Email</label>
                <input 
                    className='w-[600px] p-3 border-none outline-none' 
                    type="email" 
                    name='UserEmail'
                    placeholder='Enter your email' 
                    value={users.UserEmail || ""}
                    onChange={handleChange}
                />
            </div>
            <ImageBase name="Avatar" data={users.UserAvatar} dataName="UserAvatar" onImageUrlChange={handleImageUrlChange} folderImage={"users"}/>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Mô tả</label>
                <textarea 
                    className='w-[600px] p-3 border-none outline-none' 
                    type="text" 
                    name='UserDescription'
                    placeholder='Enter your Description' 
                    value={users.UserDescription || ""}
                    onChange={handleChange}
                />
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Trạng thái</label>
                <StatusButton status={`${users.UserStatus} || ""`}/>
            </div>
            <div className='flex gap-2 flex-col'>
                <div className='font-bold'>Box Permission</div>
                <div className='flex gap-3 flex-wrap'>
                 {permission.map((item, index) => (
                     <div key={item._id} className='w-[calc((100%-36px)/4)]'>
                     <input type="checkbox"
                      checked={selectedPermissions.includes(item._id)}
                      onChange={() => handlePermissionChange(item._id)}
                     />
                        <span>{item.RoleName}</span>
                     </div>
                      ))
                    }                   
                </div>
            </div>
            <button type='submit' className='bg-Txanh text-Twhite p-3 rounded-3xl'>
                {paramValue === null || paramValue === "" ? "Create" : "Update"}
            </button>
        </form>
    </div>;
  };
  
  export default CreateAndUpdateUser;