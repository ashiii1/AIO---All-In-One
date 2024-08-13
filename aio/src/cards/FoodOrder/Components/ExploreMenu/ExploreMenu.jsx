import React from "react";
import "./explore.css";
import { menu_list } from "../../assets/assets";
import Header from "../Header/Header";

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="">
  
    <div className="mt-2">
    <div className=" flex flex-col gap-1" id="explore-menu">
      <h1 className=" text-center pb-10 menu-text text-3xl font-[500] text-[#262626]">Explore our menu</h1>
      <p className="lg:max-w-[90%]   text-xl pl-56 text-center sm:max-w-full text-[#808080]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsam
        veniam voluptatibus quia exercitationem velit quod quae officia unde,
        suscipit
      </p>
      <div className="exploref-menu-list  flex justify-between items-center gap-[20px] text-center m-[30px.0px] overflow-x-scroll">
        {menu_list.map((item,index)=>{
            return (
            <div onClick={()=>setCategory(prev=> prev===item.menu_name?"All":item.menu_name)} key={index} className="p-2 grid gap-4">
                <img className={category===item.menu_name? "active" : "" } src={item.menu_image} alt="" />
                <p className="mt-[10px] text-[#747474] text-[1.4vw,16px] cursor-pointer ">{item.menu_name}</p>
            </div>
            )
        })}
      </div>
      <hr />
    </div>
    </div>
    </div>
  );
};

// w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-[.2s]

export default ExploreMenu;
