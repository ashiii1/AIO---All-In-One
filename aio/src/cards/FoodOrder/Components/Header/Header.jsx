import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="headerf h-[46vw] pb-14 pt-10 my-[30px] mx-auto bg-[url(https://assets.limetray.com/assets/image_manager/uploads/7639/eb-slide-23423-3.jpg)] bg-no-repeat bg-contain relative">
      <div className="headerf-contents absolute flex flex-col items-start gap-[1.5vw] lg:max-w-[50%] md:max-w-[55%] bottom-[10%] left-[6vw] animate-[fadeIn.3s]">
        <h2 className="font-[500] pb-20  text-black text-[max(5.8vw,22px)]">
          Order your favourite food here
        </h2>
        <p className="text-white text-[1vw] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem enim
          eligendi ex eaque rerum sit quo vel quas minus? Molestias culpa harum
          natus sit! Quae cumque aliquam nam eius reprehenderit?
        </p>
        <button className="bg-white px-4 py-1 border-none text-[#747474] font-[500]  text-[max(1vw,13px)] rounded-[50px]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
