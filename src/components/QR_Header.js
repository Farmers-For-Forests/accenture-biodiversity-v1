import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const QR_Header = ({title}) => {
  return (
 <>
      <div
      className="h-[106px] bg-[#125B57] z-[3000] flex justify-center items-center relative"
      style={{
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        borderBottomLeftRadius: '36px',
        borderBottomRightRadius: '36px',
        boxShadow: '0px 4px 4px 0px #00000040' 
      }}
    >
      <div className="absolute  left-[18.95px]">{/* icon */}
        <CloseIcon className="text-[#FFFFFF] cursor-pointer" />
      </div>
      <div className="absolute  ">{/* title */}
        <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#FFFFFF]">{title}</p>
      </div>
    </div>
 </>
  )
}

export default QR_Header