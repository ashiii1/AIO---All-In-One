import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="headerf h-[30vw]  pt-10 my-[30px] mx-auto bg-[url(https://madhuratalks.com/wp-content/uploads/2024/03/Biryani-In-Vijayawada-1.jpg)] bg-no-repeat bg-contain relative">
      <div className="headerf-contents absolute flex flex-col items-start gap-[1.5vw] lg:max-w-[50%] md:max-w-[55%] bottom-[10%] left-[6vw] animate-[fadeIn.3s]">
        <h2 className="font-[500] pb-20 text-center text-black text-[max(5.8vw,22px)]">
        </h2>
       
      </div>
    </div>
  );
};

export default Header;
