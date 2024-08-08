import { Avatar } from "@mui/material";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

const PostLists = ({isImage,name,occupation,place,day}) => {
  return (
    <section className="w-full py-2">
      <section className="border-2 border-[#125B57] py-4 box-border px-5">
        <div className="w-full  flex justify-start gap-[26px]">
          <Avatar
            src="/broken-image.jpg"
            className="!w-[59.9px] !h-[59.9px] !bg-[#125B57] text-white"
          />
          <div className="w-full flex flex-col gap-1 ">
            <p className="text-[12px] text-[#125B57] pt-2 font-inter font-[700] leading-[14.52px]">
            {name}

            </p>
            <p className="font-[400] text-[10px] leading-[12.1px] text-[#125B57] ">
            {occupation}
            </p>

            <div className="flex justify-start items-center text-[8px] text-[#125B57]">
              <p className="font-[400] text-[8px] leading-[9.68px] pr-5">{place}</p>
              <div className="w-[4px] h-[4px] bg-black rounded-full"></div>
              <p className="font-[400] text-[8px] leading-[9.68px] pl-2">{day}</p>
            </div>
          </div>
        </div>

       {
        isImage &&  <section className="py-5">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-colorful-wave-wallpaper-in-a-dark-background-image_2886557.jpg"
            className="rounded-[20px] w-[100%]"
          />
        </section>
       }

        <section className="flex flex-col gap-3 py-3">
          <p className="font-[400] text-[8px] leading-[9.68px]">I found this in Mandala garden.</p>
          <p className="font-[400] text-[8px] leading-[9.68px]" >3 Responses</p>
        </section>
      </section>

      <section className="w-full py-1 border-2 text-[8px] border-[#125B57] text-[#125B57] border-t-0 border-b-2 border-l-2 border-r-2  flex items-center justify-center">
        <div className="w-[33%] flex justify-center items-center gap-2 border-2 border-[#125B57] border-t-0 border-b-0 border-l-0 border-r-2">
          <ThumbUpIcon className="text-[15px] text-[#125B57]" />
          <p>Like</p>
        </div>

        <div className="w-[33%] flex justify-center items-center gap-2 border-2 border-[#125B57] border-t-0 border-b-0 border-l-0 border-r-2">
          <CommentIcon className="text-[15px] text-[#125B57]" />
          <p>Comment</p>
        </div>

        <div className="w-[33%] flex justify-center items-center gap-2">
          <ShareIcon className="text-[15px] text-[#125B57]"/>
          <p>Share</p>
        </div>
      </section>

    </section>
  );
};

export default PostLists;
