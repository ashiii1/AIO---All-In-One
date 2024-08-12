import React from "react";
import "./explore.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu flex flex-col gap-5" id="explore-menu">
      <h1 className="menu-text text-3xl font-[500] text-[#262626]">Explore our menu</h1>
      <p className="lg:max-w-[60%] sm:max-w-full text-[#808080]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsam
        veniam voluptatibus quia exercitationem velit quod quae officia unde,
        suscipit
      </p>
      <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center m-[20px.0px] overflow-x-scroll">
        {menu_list.map((item,index)=>{
            return (
            <div onClick={()=>setCategory(prev=> prev===item.menu_name?"All":item.menu_name)} key={index} className="menu-list-item">
                <img className={category===item.menu_name? "active" : "" } src={item.menu_image} alt="" />
                <p className="mt-[10px] text-[#747474] text-[1.4vw,16px] cursor-pointer ">{item.menu_name}</p>
            </div>
            )
        })}
      </div>
      <hr />
    </div>
  );
};

// w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-[.2s]

export default ExploreMenu;
