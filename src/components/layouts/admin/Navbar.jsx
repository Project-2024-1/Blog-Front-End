import clsx from "clsx";
import { useMemo } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { HomeIcon, DashboardIcon, UserIcon, HeplIcon } from "../../core/icons";

const Navbar = () => {
  const isAuth = "admin";

  const menuNavbar = useMemo(
    () => [
      {
        name: "Dashboard",
        to: "",
        icon: (color) => <DashboardIcon color={color} />,
      },
      {
        name: "Users",
        to: "users",
        icon: (color) => <UserIcon color={color} />,
        subMenu: [
          {
            name: "Users 1",
            to: "users",
            icon: (color) => <HomeIcon color={color} />,
          },
          {
            name: "Users 2",
            to: "users/create",
            icon: (color) => <HomeIcon color={color} />,
          },
          {
            name: "Users 3",
            to: "users/3",
            icon: (color) => <HomeIcon color={color} />,
          },
        ],
      },
      {
        name: "Products",
        to: "products",
        icon: (color) => <HomeIcon color={color} />,
        subMenu: [
          {
            name: "Products 1",
            to: "products",
            icon: (color) => <HomeIcon color={color} />,
          },
          {
            name: "Products 2",
            to: "products/2",
            icon: (color) => <HomeIcon color={color} />,
          },
          {
            name: "Products 3",
            to: "products/3",
            icon: (color) => <HomeIcon color={color} />,
          },
        ],
      },
      {
        name: "Help",
        to: "help",
        icon: (color) => <HeplIcon color={color} />,
      },
    ],
    []
  );

  return (
    <nav>
      <div className="flex-col hidden text-sm font-medium md:flex w-[280px] bg-white border-r border-[#999] z-20 h-screen">
        <div
          className="flex items-center cursor-pointer px-[42px] py-4 mb-11"
          onClick={() => Navigate("/")}
        >
          <p className="text-3xl font-bold">YOURLOGO</p>
        </div>

        <div className="flex flex-col mb-6 px-[22px]">
          {isAuth && isAuth
            ? menuNavbar.map((item, index) => (
                <div key={`nav_${index}`}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      clsx(
                        "flex items-center justify-between gap-4 py-[10.5px] px-5 hover:bg-Tbe rounded-full hover:text-Txanh text-lg",
                        isActive ? "text-Txanh" : ""
                      )
                    }
                    end
                  >
                    {({ isActive }) => (
                      <div className="flex items-center gap-4">
                        <span className="">
                          {item.icon(isActive ? "#4A85F6" : "#000000")}
                        </span>
                        <span>{item.name}</span>
                      </div>
                    )}
                  </NavLink>
                  {item.subMenu && (
                    <div>
                      {item.subMenu.map((submenu, subIndex) => (
                        <NavLink
                          key={`sub_nav_${subIndex}`}
                          to={submenu.to}
                          className={({ isActive }) =>
                            clsx(
                              "flex items-center justify-between gap-4 py-[10.5px] px-5 hover:bg-Tbe rounded-full hover:text-Txanh text-base",
                              isActive ? "rounded-full text-Txanh" : ""
                            )
                          }
                          end
                        >
                          {({ isActive }) => (
                            <div className="flex items-center gap-4 pl-8">
                              <span className="">
                                {submenu.icon(isActive ? "#4A85F6" : "#000000")}
                              </span>
                              <span>{submenu.name}</span>
                            </div>
                          )}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))
            : ""}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
