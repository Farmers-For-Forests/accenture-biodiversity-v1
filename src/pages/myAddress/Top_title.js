import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Top_title = () => {
  return (
    <div
      className="h-[106px] bg-[#125B57] relative  "
      style={{
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        borderBottomLeftRadius: '36px',
        borderBottomRightRadius: '36px',
        boxShadow: '0px 4px 4px 0px #00000040' 
      }}
    >
      <div className="absolute top-[40.34px] left-[18.95px]">{/* icon */}
       
        <CloseIcon className="text-[#FFFFFF] cursor-pointer"/>
       
      </div>
      <div className="absolute top-[40.34px] left-[134px]">{/* title */}
      <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#FFFFFF] ">My address</p>
      </div>
    </div>
  );
};

export default Top_title;
