import { useEffect, useState } from "react";
import { getService } from "../../../lib/api";
import { DeleteIcon, EditIcon } from "../../../components/core/icons";
import { NavLink } from "react-router-dom";
import NameBase from "../base/nameBase";

const Dashboard = () => {
  const [dataLog, setDataLog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await getService("http://localhost:3000/api/log", "");
            if (checkErrorStatus(result)) {
              // Nếu là mã lỗi 403 hoặc 401, chuyển hướng đến trang đăng nhập
              window.location.href = '/login'; // hoặc sử dụng navigate từ react-router-dom
              return;
          }
            setDataLog(result.logs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);

// hàm kiểm tra statusCode để redirect về trang Admin
const checkErrorStatus = (response) => {
  if (response.status === 403 || response.status === 401) {
      // Nếu mã lỗi là 403 hoặc 401, trả về true
      return true;
  }
  // Nếu không phải là 403 hoặc 401, trả về false
  return false;
};

  return <div>
    <NameBase name='Lịch sử cập nhật hệ thống'/>
    {dataLog && dataLog.map((item, index) => (
                    <div key={item._id} className="flex w-full items-center gap-3 my-4">
                            <div className="w-[20%] flex flex-col gap-2">
                                <div className="font-bold">{item.LogName}</div>
                            </div>
                            <div className="w-[30%]">
                                {item.LogDescription}
                            </div>
                            <div className="w-[15%]">{item.createdAt}</div>
                            <div className="w-[15%]">{item.LogType}</div>
                            {/* <div className="w-[15%] flex gap-2">
                                <NavLink to={`/admin/users/create?idUser=${item._id}`} className="cursor-pointer"><EditIcon/></NavLink>
                                <NavLink className="cursor-pointer"><DeleteIcon/></NavLink>
                            </div> */}
                        </div>
                ))}
  </div>;
};

export default Dashboard;
