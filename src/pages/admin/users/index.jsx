import { Navigate, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import NameBase from "../base/nameBase";
import { PlusIcon, FilterIcon, SearchIcon, DownIcon, EditIcon , DeleteIcon} from "../../../components/core/icons";
import StatusButton from "../base/statusButton";
import { getService } from "../../../lib/api";


const IndexUser = () => {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getService("http://localhost:3000/api/user", "");
                setDataUser(result.users);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    // console.log(dataUser)
    return <div>
        <NameBase name='User Dashboard'/>
        <div className="flex w-full items-center gap-3 my-4">
            <form className="flex gap-2 w-[60%] bg-Twhite items-center px-5 py-2 rounded-3xl">
                <button className="mt-2">
                    <SearchIcon/>   
                </button>
                <input className="w-[calc(100%-28px)] border-none outline-none" type="text" placeholder="Search" required/>
            </form>
            <NavLink to={"/admin/users/create"} className="w-[10%] bg-Txanh text-Twhite rounded-lg flex items-center justify-center py-3 text-xl font-bold cursor-pointer">
                Add User+
            </NavLink>
            <div className="w-[10%]  text-Tblack rounded-lg flex items-center justify-center py-3 text-xl font-bold">
                <select className=" bg-Tbe cursor-pointer w-full border-none outline-none text-center">
                    <option value="0">Sort by</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>    
            </div>
            <div className="w-[10%] cursor-pointer">
                <FilterIcon/>
            </div>
        </div>
        <div>
            <NameBase name='List Users'/>
            <div>
                <div className="flex w-full items-center gap-3 my-4 text-center">
                        <div className="w-[30%] ">
                            <div>Name</div>
                        </div>
                        <div className="w-[15%] ">
                            <div>Ảnh</div>
                        </div>
                        <div className="w-[10%]">
                            Role
                        </div>
                        <div className="w-[15%]">Create Date</div>
                        <div className="w-[15%]">Status</div>
                        <div className="w-[15%]">Action</div>
                </div>
                {dataUser && dataUser.map((item, index) => (
                    <div key={item._id} className="flex w-full items-center gap-3 my-4">
                            <div className="w-[30%] flex flex-col gap-2">
                                <div className="font-bold">{item.UserName}</div>
                                <span>{item.UserEmail}</span>
                            </div>
                            <div className="w-[15%]">
                                <img src={item.UserAvatar} alt="" />
                            </div>
                            <div className="w-[10%]">
                                Super Admin
                            </div>
                            <div className="w-[15%]">{item.createdAt}</div>
                            <div className="w-[15%]"><StatusButton status={item.UserStatus}/></div>
                            <div className="w-[15%] flex gap-2">
                                <NavLink to={`/admin/users/create?idUser=${item._id}`} className="cursor-pointer"><EditIcon/></NavLink>
                                <NavLink className="cursor-pointer"><DeleteIcon/></NavLink>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    </div>;
  };
  
  export default IndexUser;