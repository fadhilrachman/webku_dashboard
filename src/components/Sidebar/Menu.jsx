import React from "react";
import { Link, useLocation } from "react-router-dom";
const Menu = () => {
  const location = useLocation();
  const childLocation = "/" + location.pathname.split("/")[1].split("-")[0];
  const listSidebar = [
    {
      name: "Dashboard",
      path: "/",
      icon: "bi bi-speedometer2",
    },
    {
      name: "Income",
      path: "/income",
      icon: "bi bi-coin",
    },
    {
      name: "Expense",
      path: "/expense",
      icon: "bi bi-basket",
    },
  ];
  return (
    <div className="border-r h-screen col-span-2 ">
      <div className="flex  flex-col">
        <div className="flex  border-b py-5 px-5 text-neutral-500 text-xs  items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://picsum.photos/200/300"
              className="rounded-full bg-black h-10 w-10"
            ></img>
            <div className="ml-3">
              <p>Fadhil</p>
              <p className="mt-2 font-bold text-black">Administrator</p>
            </div>
          </div>
          <i class="bi bi-caret-down-fill text-xs"></i>
        </div>
        {listSidebar.map((val) => {
          return (
            <Link to={val.path}>
              <div
                className={
                  val.path == childLocation || val.path == location.pathname
                    ? `p-5 font-thin    hover:cursor-pointer hover:border-l-4 border-blue-600 border-l-4 text-black`
                    : "p-5 font-thin  text-neutral-500  hover:cursor-pointer hover:border-l-4 border-blue-600 "
                }
              >
                <i className={val.icon}></i>
                <span className="ml-5">{val.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <img src="" alt="" srcset="" />
    </div>
  );
};

export default Menu;
